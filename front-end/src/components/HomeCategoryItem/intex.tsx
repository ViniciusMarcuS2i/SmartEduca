import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

interface ICategory {
  text: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
}

export function HomeCategoryItem({ text, icon, onPress }: ICategory) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container}
    >
      <Ionicons name={icon} size={22} color="white" />
      <Text numberOfLines={1} style={styles.categoryName}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
