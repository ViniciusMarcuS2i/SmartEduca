import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

interface PressableOptionProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  color: string;
  onPress?: () => void;
}

function PressableOption({
  icon,
  title,
  color,
  onPress,
}: PressableOptionProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className="items-center justify-center gap-2 self-start"
    >
      <View
        style={{ backgroundColor: color }}
        className={`items-center justify-center rounded-2xl p-2`}
      >
        <Ionicons name={icon} size={27} color="#fff" />
      </View>
      <Text className="font-poppinsMedium text-[#636d77]">{title}</Text>
    </TouchableOpacity>
  );
}

export default PressableOption;
