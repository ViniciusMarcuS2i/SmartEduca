import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { findTheA } from "../../../assets/images";
import { RegisterButton } from "../../../components/RegisterButton/intex";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

export function FirstScreen() {
  const navigator = useNavigation();

  return (
    <View style={styles.container}>
      <LottieView
        style={styles.image}
        source={require("../../../assets/studentGiffTwo.json")}
        autoPlay
        loop={false}
      />
      <Text style={styles.h1}>Vamos alcançar os 10 do seu filho!</Text>
      <Text style={styles.p}>Faça o Login para saber como vai seu filho!</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigator.navigate("signUp" as never)}
      >
        <RegisterButton text="Cadastrar" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigator.navigate("signIn" as never)}>
        <Text style={styles.alreadyHaveAccountText}>Já tenho conta!</Text>
      </TouchableOpacity>
    </View>
  );
}
