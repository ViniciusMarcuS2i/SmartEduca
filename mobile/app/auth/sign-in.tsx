import {
  ActivityIndicator,
  Alert,
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { google } from "../_assets/images";
import { router } from "expo-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import auth from "@react-native-firebase/auth";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

const schema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(1, "Digite sua senha"),
});

type zodProps = z.infer<typeof schema>;

function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<zodProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignIn = async (data: zodProps) => {
    try {
      setIsLoading(true);
      const email = data.email.trim().toLocaleLowerCase();
      const user = await auth().signInWithEmailAndPassword(
        email,
        data.password,
      );
      Keyboard.dismiss();
      console.log(user);
      reset();
    } catch (error) {
      console.log(error);
      Alert.alert("Erro ao realizar login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SafeAreaView className="flex flex-1 flex-col bg-[#fff] px-8 pt-10">
        <Text className="text-center font-sans text-2xl">Login</Text>
        <View className="mt-14 flex flex-col gap-8">
          <View className="flex flex-col gap-3">
            <Text className="font-sans text-xl">Email</Text>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  placeholder="exemplo@email.com"
                  className={`h-[54px] w-full rounded-xl border-2 border-gray-400 px-6 font-sans text-xl ${errors.email && "border-red-500"}`}
                />
              )}
            />
            {errors.email && (
              <Text className="-mt-2 font-sans text-red-500">
                {errors.email.message}
              </Text>
            )}
          </View>
          <View className="flex flex-col gap-3">
            <Text className="font-sans text-xl">Senha</Text>
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  value={value}
                  secureTextEntry
                  onChangeText={onChange}
                  placeholder="Digite sua senha"
                  className={`h-[54px] w-full rounded-xl border-2 border-gray-400 px-6 font-sans text-xl ${errors.password && "border-red-500"}`}
                />
              )}
            />
            {errors.password && (
              <Text className="-mt-2 font-sans text-red-500">
                {errors.password?.message}
              </Text>
            )}
          </View>
        </View>
        <TouchableOpacity
          onPress={() => router.navigate("/auth/forgot" as any)}
          activeOpacity={0.7}
        >
          <Text className="mt-4 text-xl text-primary">Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={isLoading}
          activeOpacity={0.7}
          className="mt-6 flex h-16 w-full items-center justify-center rounded-lg bg-primary"
          onPress={handleSubmit(handleSignIn)}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="font-poppinsMedium text-xl text-white">
              Entrar
            </Text>
          )}
        </TouchableOpacity>
        <View className="w-full flex-col gap-9">
          <Text className="mt-4 text-center text-lg">
            Não tem conta?{" "}
            <Text
              onPress={() => router.navigate("/auth/sign-up")}
              className="text-lg text-primary"
            >
              Cadastrar
            </Text>
          </Text>

          <Text className="text-center text-lg">ou</Text>
          <View className="self-center">
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ flexDirection: "row" }}
              className="gap-3 rounded-full border-2 border-black px-6 py-4"
            >
              <Image source={google} />
              <Text className="text-lg">Entrar com google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <StatusBar style="dark" />
    </>
  );
}

export default SignIn;
