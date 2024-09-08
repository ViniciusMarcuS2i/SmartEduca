import {
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

const userSchema = z.object({
  email: z.string().email("Coloque um email válido"),
  password: z.string().min(6, "Senha incorreta"),
});

type UserSchema = z.infer<typeof userSchema>;

export function SignIn() {
  const onSubmit = (data: UserSchema) => {
    console.log(data);
    reset();
    Alert.alert("ADVINHA?", "TEU APP NÃO PRESTA SEU PEDAÇO DE MERDA");
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
        <RegisterButton text="Entrar" />
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
