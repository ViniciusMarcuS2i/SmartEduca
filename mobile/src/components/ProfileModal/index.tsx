import { Text, View } from "moti";
import { Modal, Pressable, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Material from "@expo/vector-icons/MaterialIcons";
import { THEME } from "../../theme/theme";
import { MotiPressable } from "moti/interactions";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

interface ModalI {
  isOpen: boolean;
  onPress: () => void;
}

export function ProfileModal({ isOpen, onPress }: ModalI) {
  const { userData } = useContext(AuthContext);

  return (
    <Modal
      style={styles.modal}
      transparent={true}
      visible={isOpen}
      animationType="slide"
      statusBarTranslucent={true}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Modificar dados</Text>
          <MotiPressable
            from={{
              rotate: "180deg",
            }}
            animate={{ rotate: "0deg" }}
            onPress={onPress}
          >
            <Material
              color={THEME.COLORS.BLUE_150}
              size={24}
              name="arrow-downward"
            />
          </MotiPressable>
        </View>
        <View style={{ gap: 22, marginTop: 50 }}>
          <TextInput
            value="MURILO VICTOR DE OLIVEIRA NONATO"
            editable={false}
            style={styles.input}
          />
          <TextInput
            style={styles.input}
            value="MARCELO DE SOUZA NONATO"
            editable={false}
          />
          <TextInput
            style={styles.input}
            value="FRANCIMEIRA CASTILHO DE OLIVEIRA"
            editable={false}
          />
          <TextInput placeholder="Digite a senha nova" style={styles.input} />
          <TextInput placeholder="Senha antiga" style={styles.input} />
          <TouchableOpacity activeOpacity={0.7} style={styles.submitButton}>
            <Text style={styles.buttonText}>Alterar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
