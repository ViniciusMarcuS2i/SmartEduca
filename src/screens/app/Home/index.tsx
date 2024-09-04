import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.profileBox}>
        <View>
          <Text style={styles.welcomeText}>Bem-vindo!</Text>
          <Text style={styles.nameText}>Olá, Fulano!</Text>
        </View>
        <Image
          style={styles.userProfileImage}
          source={{
            uri: "https://picsum.photos/200",
            width: 72,
            height: 72,
          }}
        />
      </View>
    </View>
  );
}
