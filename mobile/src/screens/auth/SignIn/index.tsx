import {
  ActivityIndicator,
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { signInImage } from "../../../assets/images";
import { styles } from "./styles";
import { RegisterButton } from "../../../components/RegisterButton/intex";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import auth from "@react-native-firebase/auth";
import { firebase } from "@react-native-firebase/firestore";
import { useState } from "react";

const userSchema = z.object({
  email: z.string().email("Coloque um email válido"),
  password: z.string().min(6, "Digite sua senha"),
});

type UserSchema = z.infer<typeof userSchema>;

export function SignIn() {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data: UserSchema) => {
    try {
      setLoading(true);
      const email = data.email.trim().toLowerCase();
      const userExists = await firebase
        .firestore()
        .collection("users")
        .where("email", "==", email)
        .get();
      if (userExists.empty) {
        Alert.alert("Usuário não encontrado!");
        console.log(userExists);
        console.log(email);
        setLoading(false);
      } else {
        const user = await auth().signInWithEmailAndPassword(
          data.email,
          data.password
        );
        return user;
      }
    } catch (error) {
      Alert.alert("Úsuario ou senha incorretos!");
    }
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(userSchema),
  });
  const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={signInImage} />
      <View style={styles.inputSeparator}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                onChangeText={onChange}
                value={value}
                placeholder="nome@exemplo.com"
                style={!errors.email ? styles.textInput : styles.textInputError}
              />
            )}
          />
          {errors.email && (
            <Text style={styles.textErrorMessage}>{errors.email.message}</Text>
          )}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                onChangeText={onChange}
                value={value}
                secureTextEntry
                placeholder="Digite sua senha"
                style={
                  !errors.password ? styles.textInput : styles.textInputError
                }
              />
            )}
          />
          {errors.password && (
            <Text style={styles.textErrorMessage}>
              {errors.password.message}
            </Text>
          )}
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.7} onPress={handleSubmit(onSubmit)}>
        <RegisterButton
          text={
            loading ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              "Entrar"
            )
          }
        />
      </TouchableOpacity>
      <View style={styles.noAccount}>
        <Text style={styles.noAccountText}>Não tem conta?</Text>
        <TouchableOpacity onPress={() => navigator.navigate("signUp" as never)}>
          <Text style={styles.signUpText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
