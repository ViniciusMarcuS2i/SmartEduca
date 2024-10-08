import { Text } from "react-native";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MotiPressable } from "moti/interactions";
import { useState } from "react";

interface ICategory {
  text: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
}

export function HomeCategoryItem({ text, icon, onPress }: ICategory) {
  const [press, setPress] = useState(false);

  return (
    <MotiPressable
      from={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 1200,
      }}
      onPressIn={() => setPress(!press)}
      onPressOut={() => setPress(!press)}
      onPress={onPress}
      style={press ? styles.containerIn : styles.container}
    >
      <Ionicons name={icon} size={22} color="white" />
      <Text numberOfLines={1} style={styles.categoryName}>
        {text}
      </Text>
    </MotiPressable>
  );
}
