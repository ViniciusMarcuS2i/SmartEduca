import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { THEME } from "../../../theme/theme";
import IonIcons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export function Profile() {
  const navigator = useNavigation();
  const nome = "nome";
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[THEME.COLORS.BLUE_150, "#000"]}
        style={styles.gradient}
      >
        <TouchableOpacity
          onPress={() => navigator.goBack()}
          style={styles.arrowBack}
        >
          <IonIcons size={22} name="arrow-back" color={THEME.COLORS.BLUE_150} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settings}>
          <IonIcons
            size={22}
            name="settings-sharp"
            color={THEME.COLORS.BLUE_150}
          />
        </TouchableOpacity>

        <Image
          style={styles.userImg}
          source={require("../../../assets/userIcon.jpg")}
        />
        <Text style={styles.userName}>Murilo Victor</Text>
        <Text style={styles.class}>2° Ano - A</Text>
      </LinearGradient>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsContainerTitle}>Detalhes do Aluno </Text>
        <Text style={styles.detailsContainerInfosText}>Nome do Pai: </Text>
        <Text style={styles.detailsContainerInfosText}>Nome da Mãe: </Text>
        <Text style={styles.detailsContainerInfosText}>
          Data de Nascimento:
        </Text>
        <Text style={styles.detailsContainerInfosText}>CPF: </Text>
      </View>
    </View>
  );
}
