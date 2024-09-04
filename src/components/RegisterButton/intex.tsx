import { Text, View } from "react-native";
import { styles } from "./styles";

interface IButton {
  text: string;
}

export function RegisterButton({ text }: IButton) {
  return (
    <View style={styles.signUpButton}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  );
}
