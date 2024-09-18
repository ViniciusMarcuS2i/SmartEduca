import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { THEME } from "../../../theme/theme";

export function Profile() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[THEME.COLORS.BLUE_150, THEME.COLORS.BLUE_50]}
        style={styles.gradient}
      >
        <Image
          style={styles.userImg}
          source={require("../../../assets/userIcon.jpg")}
        />
        <Text style={styles.userName}>Murilo Victor</Text>
        <Text style={styles.class}>2° Ano - A</Text>
      </LinearGradient>
    </View>
  );
}
