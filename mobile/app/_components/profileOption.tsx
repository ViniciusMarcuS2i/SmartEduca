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
      <Ionicons name={icon} size={22} color="#797979" />
      <Text className="font-poppinsMedium text-xl text-[#797979]">{title}</Text>
    </TouchableOpacity>
  );
}

export default ProfileOption;
