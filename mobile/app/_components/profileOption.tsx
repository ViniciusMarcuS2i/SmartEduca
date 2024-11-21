import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

interface ProfileOptionProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  onPress?: () => void;
}

function ProfileOption({ icon, title, onPress }: ProfileOptionProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className="flex-row items-center gap-4"
    >
      <Ionicons name={icon} size={26} color="#1fcdff" />
      <Text className="font-poppinsMedium text-xl">{title}</Text>
    </TouchableOpacity>
  );
}

export default ProfileOption;
