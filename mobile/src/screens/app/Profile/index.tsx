import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { THEME } from "../../../theme/theme";
import IonIcons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { ProfileModal } from "../../../components/ProfileModal";
import { useState } from "react";

export function Profile() {
  const navigator = useNavigation();
  const userData = {
    fatherName: "Marcelo Nonato",
    motherName: "Francimeire Castilho",
    birthDate: "19/12/2020",
    CPF: "000.000.000-00",
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      <ProfileModal onPress={() => setIsOpen(!isOpen)} isOpen={isOpen} />
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
        <TouchableOpacity
          onPress={() => setIsOpen(!isOpen)}
          style={styles.settings}
        >
          <IonIcons
            size={22}
            name="pencil-sharp"
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
        <Text style={styles.detailsContainerInfosText}>
          Nome do Pai:{" "}
          <Text style={{ color: THEME.COLORS.GRAY_500 }}>
            {userData.fatherName}
          </Text>
        </Text>
        <Text style={styles.detailsContainerInfosText}>
          Nome da Mãe:{" "}
          <Text style={{ color: THEME.COLORS.GRAY_500 }}>
            {userData.motherName}
          </Text>
        </Text>
        <Text style={styles.detailsContainerInfosText}>
          Data de Nascimento:{" "}
          <Text style={{ color: THEME.COLORS.GRAY_500 }}>
            {userData.birthDate}
          </Text>
        </Text>
        <Text style={styles.detailsContainerInfosText}>
          CPF:{" "}
          <Text style={{ color: THEME.COLORS.GRAY_500 }}>{userData.CPF}</Text>
        </Text>
      </View>
    </View>
  );
}
