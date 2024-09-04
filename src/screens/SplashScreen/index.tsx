import { ImageBackground } from "react-native";
import { styles } from "./styles";
import { SplashScreenImage } from "../../assets/images";

export function SplashScreen() {
  return (
    <ImageBackground style={styles.container} source={SplashScreenImage} />
  );
}
