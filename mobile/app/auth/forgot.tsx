import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ActivityIndicator,
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import auth from "@react-native-firebase/auth";
import { useState } from "react";
import { checked } from "../_assets/images";

const forgotSchema = z.object({
  email: z.string().email("Email inválido"),
});

type ForgotForm = z.infer<typeof forgotSchema>;

function Forgot() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ForgotForm>({
    resolver: zodResolver(forgotSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSendRedefinePasswordEmail = (data: ForgotForm) => {
    try {
      setIsLoading(true);
      auth().sendPasswordResetEmail(data.email);
      setIsModalVisible(true);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex flex-1 flex-col bg-[#fff] px-8 pt-6">
      <TouchableOpacity
        onPress={() => router.back()}
        activeOpacity={0.7}
        className="-ml-3"
      >
        <MaterialCommunityIcons name="chevron-left" color="#1fcdff" size={32} />
      </TouchableOpacity>

      <View className="gap-4">
        <Text className="mt-12 font-poppinsBold text-3xl">
          Esqueceu a senha?
        </Text>
        <Text className="font-sans text-lg text-[#636d77]">
          Sem problemas! Apenas nos diga seu email para que possamos enviar um
          email para redefinição de senha.
        </Text>
      </View>
      <View className="mt-12 gap-3">
        <Text className="font-poppinsMedium text-xl">Email</Text>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder={"exemplo@gmail.com"}
              className={`h-[54px] w-full rounded-xl border-2 border-gray-400 px-6 font-sans text-xl ${errors.email && "border-red-500"}`}
            />
          )}
        />
        {errors.email && (
          <Text className="-mt-2 font-sans text-red-500">
            {errors.email?.message}
          </Text>
        )}
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        className="mt-8 flex h-16 w-full items-center justify-center rounded-lg bg-primary"
        onPress={handleSubmit(handleSendRedefinePasswordEmail)}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-xl font-bold text-white">
            Enviar email de redefinição
          </Text>
        )}
      </TouchableOpacity>
      <Modal transparent statusBarTranslucent visible={isModalVisible}>
        <View className="flex flex-1 items-center justify-center bg-black/50">
          <View className="flex w-11/12 items-center rounded-xl bg-white px-12 py-12">
            <Image
              source={checked}
              className="h-20 w-20"
              resizeMode="contain"
            />
            <Text className="mt-10 font-poppinsMedium text-2xl">
              Email enviado!
            </Text>
            <Text className="mt-2 text-center text-[#636d77]">
              Caso exista uma conta com esse endereço de email, verifique sua
              caixa de entrada!
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setIsModalVisible(false)}
              className="mt-8 rounded-lg border-[1px] border-primary"
            >
              <Text className="mx-20 my-3 font-poppinsSemi text-primary">
                Fechar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default Forgot;
