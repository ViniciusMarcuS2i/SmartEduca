import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { boyBackground } from "../_assets/images";
import { router } from "expo-router";

function ApresentationScreen() {
  const handleGoToSecondApresentation = () => {
    router.navigate("/auth/second-apresentation");
  };

  return (
    <>
      <LinearGradient className="flex-1" colors={["#00C4FD", "#006FFF"]}>
        <ImageBackground
          className="flex-1 justify-end gap-3 px-8 pb-24"
          source={boyBackground}
        >
          <Text className="text-center font-poppinsBold text-4xl text-secondary">
            Seja bem-vindo!
          </Text>
          <Text className="text-center font-poppinsBold text-2xl text-white">
            Aqui você ficará por dentro de cada evolução do seus filhos!
          </Text>
          <View className="mt-16 self-center">
            <TouchableOpacity
              onPress={handleGoToSecondApresentation}
              style={{ alignSelf: "flex-start" }}
              activeOpacity={0.7}
              className="rounded-lg bg-primary px-8 py-4"
            >
              <Text className="font-poppinsBold text-xl text-white">
                Vamos começar!
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

export default ApresentationScreen;
