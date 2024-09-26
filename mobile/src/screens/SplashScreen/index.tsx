import { Image, View } from "react-native";
import { styles } from "./styles";

export function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoImage}
        source={require("../../assets/SmartEduca.png")}
      />
    </View>
  );
}
