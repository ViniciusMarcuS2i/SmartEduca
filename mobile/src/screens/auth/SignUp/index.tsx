import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { RegisterButton } from "../../../components/RegisterButton/intex";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import LottieView from "lottie-react-native";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

const userSchema = z.object({
  name: z.string().min(3, "Coloque um nome válido"),
  email: z.string().email("Coloque um email válido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type UserSchema = z.infer<typeof userSchema>;

export function SignUp() {
  async function onSubmit(data: UserSchema) {
    try {
      const email = data.email.trim().toLowerCase();
      const createUser = await auth().createUserWithEmailAndPassword(
        email,
        data.password
      );
      if (createUser && createUser.user) {
        reset();
        firestore().collection("users").doc(createUser.user.uid).set({
          name: data.name,
          email: email,
          password: data.password,
        });
      }
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      Alert.alert("Já existe um usúario com esse e-mail!");
    }
  }

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSchema>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(userSchema),
  });
  const navigator = useNavigation();

  return (
    <View style={styles.container}>
      <LottieView
        loop
        autoPlay
        style={styles.image}
        resizeMode="contain"
        source={require("../../../assets/studentGiff.json")}
      />
      <View style={styles.inputSeparator}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome e Sobrenome</Text>
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                onChangeText={onChange}
                value={value}
                placeholder="Digite seu nome"
                style={!errors.name ? styles.textInput : styles.textInputError}
              />
            )}
          />
          {errors.name && (
            <Text style={styles.textErrorMessage}>{errors.name.message}</Text>
          )}
        </View>
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
                secureTextEntry
                onChangeText={onChange}
                value={value}
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
        <RegisterButton text="Cadastrar" />
      </TouchableOpacity>
      <View style={styles.noAccount}>
        <Text style={styles.noAccountText}>Já tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigator.navigate("signIn" as never)}>
          <Text style={styles.signUpText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
