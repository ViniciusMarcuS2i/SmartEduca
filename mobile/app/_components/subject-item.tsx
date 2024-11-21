import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

export interface SubjectItemProps {
  subjectName: string;
  teacherName: string;
  subjectIcon: any;
  pontuation: string;
  pontuation2: string;
  pontuation3: string;
  pontuation4: string;
}

interface SubjectI {
  subject: SubjectItemProps;
}

function SubjectItem({ subject }: SubjectI) {
  return (
    <TouchableOpacity
      onPress={() => router.navigate(`/${subject.subjectName}` as any)}
      activeOpacity={0.8}
    >
      <LinearGradient
        style={{ borderRadius: 12 }}
        colors={
          subject.subjectName === "História"
            ? ["#8f3806da", "#662b09"]
            : subject.subjectName === "Matemática"
              ? ["#039ff8", "#0b8bd3"]
              : ["#eb1414", "#970c0c"]
        }
        className="mt-2 p-4"
      >
        <View className="relative flex-row items-center justify-between">
          <Image
            source={subject.subjectIcon}
            className="absolute right-4 top-4 h-32 w-32 overflow-hidden"
            resizeMode="contain"
          />
          <Text className="font-poppinsSemi text-3xl text-white">
            {subject.subjectName}
          </Text>
          <MaterialCommunityIcons name="drag-vertical" color="#fff" size={24} />
        </View>
        <Text className="text-md mt-20 text-white">{subject.teacherName}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default SubjectItem;
