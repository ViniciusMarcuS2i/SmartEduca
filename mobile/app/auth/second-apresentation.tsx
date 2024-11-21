import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { firstKid, secondKid, thirdKid } from "../_assets/images";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";

function SecondApresentationScreen() {
  const [index, setIndex] = useState(0);

  const carouselImage = [firstKid, secondKid, thirdKid];
  const carouselTitle = [
    "Vamos alcançar os 10 do seu filho!",
    "Aqui você fica por dentro de tudo sobre seu filho",
    "Não perca um passo da evolução dele!",
  ];
  const carouselDescription = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoRE2.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoRE3.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoRE4.",
  ];

  return (
    <SafeAreaView className="flex-1">
      <LinearGradient
        className="items-center justify-center pt-14"
        colors={["#00C4FD", "#006FFF"]}
      >
        <Image
          className="h-[400px] w-[400px]"
          resizeMode="contain"
          source={carouselImage[index]}
        />
      </LinearGradient>
      <View className="gap-6 px-12">
        <Text className="mt-10 text-center font-poppinsSemi text-2xl">
          {carouselTitle[index]}
        </Text>
        <Text className="text-center font-poppinsMedium text-lg text-[#636d77]">
          {carouselDescription[index]}
        </Text>
      </View>
      <View className="px-14">
        <View className="mt-32 h-32 flex-row items-center justify-between">
          <Link href={"/auth/sign-in" as any} asChild>
            <TouchableOpacity activeOpacity={0.7}>
              {index === 2 ? (
                <Text className="text-xl text-primary">Login</Text>
              ) : (
                <Text className="text-xl text-primary">Pular</Text>
              )}
            </TouchableOpacity>
          </Link>
          {index === 2 ? (
            <Link href={"/auth/sign-up" as any} asChild>
              <TouchableOpacity activeOpacity={0.7}>
                <Text className="text-xl text-primary">Cadastrar</Text>
              </TouchableOpacity>
            </Link>
          ) : (
            <TouchableOpacity
              onPress={() => setIndex((state) => state + 1)}
              className="rounded-full bg-primary p-2"
              activeOpacity={0.7}
            >
              <MaterialCommunityIcons
                name="chevron-right"
                size={32}
                color="#ffff00"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SecondApresentationScreen;
