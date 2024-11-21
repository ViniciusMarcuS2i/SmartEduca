import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { logo } from "../_assets/images";
import * as Progress from "react-native-progress";
import { useState } from "react";
import { Checkbox } from "expo-checkbox";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

function SignUpScreen() {
  const [index, setIndex] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const title = [
    "Bem-vindo(a)! Vamos Iniciar!",
    "Gostaria de adicionar outro?",
    "Para sempre mantermos contato",
    "Agora, quero saber sobre seu filho(a)",
    "E qual seria o CPF do Aluno(a)?",
    "Quando seria a data de nascimento do Aluno(a)?",
    "E para finalizar, crie sua senha!",
  ];
  const label = [
    "Nome do responsável",
    "Segundo responsável",
    "Email do responsável",
    "Nome do aluno(a)",
    "CPF do aluno(a)",
    "Data de nascimento",
    "Defina uma senha",
  ];

  const placeholder = [
    "Nome Completo",
    "Nome Completo",
    "exemplo@email.com",
    "Nome completo",
    "000.000.000-00",
    "dd/mm/aaaa",
    "Defina uma senha",
    "Confirme sua senha",
  ];

  const progress = [0.14, 0.28, 0.42, 0.56, 0.7, 0.84, 1];

  const handleNextStep = () => {
    setIndex((prev) => prev + 1);
  };

  return (
    <>
      <SafeAreaView className="flex-1 bg-[#fff] px-6 pt-8">
        <View className="flex flex-row items-center justify-between px-[1px]">
          <MaterialCommunityIcons
            onPress={() => router.navigate("/auth/sign-in" as any)}
            name="chevron-left"
            size={32}
            color="#1fdcff"
          />
          <Image source={logo} className="h-12 w-12" />
          <MaterialCommunityIcons
            name="chevron-left"
            color="transparent"
            size={32}
          />
        </View>
        <View className="pt-7">
          <Progress.Bar
            progress={progress[index]}
            width={null}
            color="#1fdcff"
            borderWidth={0}
            unfilledColor="#ffff00"
          />
        </View>
        <Text className="mb-4 mt-7 font-sans text-xl">{title[index]}</Text>
        <Text className="mt-7 font-poppinsSemi text-xl">{label[index]}</Text>
        {index === 0 && (
          <TextInput
            style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}
            placeholder={placeholder[0]}
            className="mt-4 h-[54px] w-full rounded-xl border-2 border-gray-400 px-6 font-sans text-xl"
          />
        )}
        {index === 1 && (
          <TextInput
            style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}
            placeholder={placeholder[1]}
            className="mt-4 h-[54px] w-full rounded-xl border-2 border-gray-400 px-6 font-sans text-xl"
          />
        )}
        {index === 2 && (
          <TextInput
            style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}
            placeholder={placeholder[2]}
            className="mt-4 h-[54px] w-full rounded-xl border-2 border-gray-400 px-6 font-sans text-xl"
          />
        )}
        {index === 3 && (
          <TextInput
            style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}
            placeholder={placeholder[3]}
            className="mt-4 h-[54px] w-full rounded-xl border-2 border-gray-400 px-6 font-sans text-xl"
          />
        )}
        {index === 4 && (
          <TextInput
            style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}
            placeholder={placeholder[4]}
            className="mt-4 h-[54px] w-full rounded-xl border-2 border-gray-400 px-6 font-sans text-xl"
          />
        )}
        {index === 5 && (
          <TextInput
            style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}
            placeholder={placeholder[5]}
            className="mt-4 h-[54px] w-full rounded-xl border-2 border-gray-400 px-6 font-sans text-xl"
          />
        )}
        {index === 6 && (
          <TextInput
            style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}
            placeholder={placeholder[6]}
            className="mt-4 h-[54px] w-full rounded-xl border-2 border-gray-400 px-6 font-sans text-xl"
          />
        )}
        {index !== 6 && (
          <TouchableOpacity
            onPress={handleNextStep}
            className="mt-8 self-end rounded-full bg-primary p-1"
          >
            <MaterialCommunityIcons
              name="chevron-right"
              size={32}
              color="#ffff00"
            />
          </TouchableOpacity>
        )}
        {index === 6 && (
          <>
            <TextInput
              style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}
              placeholder={placeholder[7]}
              className="mt-4 h-[54px] w-full rounded-xl border-2 border-gray-400 px-6 font-sans text-xl"
            />
            <View className="mt-6 flex-row items-center gap-2">
              <Checkbox
                style={{
                  borderWidth: 1,
                  borderRadius: 6,
                }}
                value={isChecked}
                color={isChecked ? "#1fdcff" : undefined}
                onValueChange={() => setIsChecked(!isChecked)}
              />
              <Text className="font-sans text-lg">
                Eu concordo com os termos e condições
              </Text>
            </View>
            <TouchableOpacity
              disabled={!isChecked}
              activeOpacity={0.7}
              className={`mt-10 flex h-16 w-full items-center justify-center rounded-lg bg-primary ${!isChecked && "opacity-70"}`}
            >
              <Text className="text-2xl font-bold text-white">Criar conta</Text>
            </TouchableOpacity>
          </>
        )}
        {/* <Text onPress={() => setIndex(0)}>aaa</Text> */}
      </SafeAreaView>
      <StatusBar style="dark" />
    </>
  );
}

export default SignUpScreen;
