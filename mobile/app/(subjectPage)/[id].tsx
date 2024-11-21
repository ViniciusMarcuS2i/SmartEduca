import { router, useLocalSearchParams } from "expo-router";
import { subjects } from "../_components/subject-list";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { SubjectItemProps } from "../_components/subject-item";
import SchoolGrade from "../_components/schoolGrade";

function SubjectPage() {
  const { id } = useLocalSearchParams();
  const subject = subjects.find(
    (subject) => subject.subjectName === id,
  ) as SubjectItemProps;
  const sum =
    Number(subject.pontuation) +
    Number(subject.pontuation2) +
    Number(subject.pontuation3) +
    Number(subject.pontuation4);

  const average = sum / 4;

  return (
    <>
      <View className="flex-1">
        <LinearGradient
          style={{
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            position: "relative",
          }}
          className="px-4 pb-8 pt-16"
          colors={
            subject.subjectName === "História"
              ? ["#8f3806da", "#662b09"]
              : subject.subjectName === "Matemática"
                ? ["#039ff8", "#0b8bd3"]
                : ["#eb1414", "#970c0c"]
          }
        >
          <View className="flex-row items-center justify-between">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.navigate("/logged/subjects")}
            >
              <MaterialCommunityIcons
                name="chevron-left"
                color="white"
                size={32}
              />
            </TouchableOpacity>
            <Ionicons name="notifications-outline" color="white" size={28} />
          </View>
          <View className="mt-12 px-3">
            <Text className="font-poppinsSemi text-3xl text-white">
              {subject?.subjectName}
            </Text>
          </View>
          <Text className="ml-3 mt-32 font-sans text-white">
            Prof° {subject?.teacherName}
          </Text>
          <Image
            source={subject?.subjectIcon}
            className="absolute bottom-10 right-2 h-44 w-44"
          />
        </LinearGradient>
        <View
          style={{ elevation: 6 }}
          className="mx-4 mt-6 rounded-lg bg-white pb-6 pt-4"
        >
          <Text className="text-center font-poppinsSemi text-2xl text-[#646d77]">
            Boletim Digital
          </Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{ paddingHorizontal: 12 }}
          >
            <SchoolGrade
              schoolBimester="1° Bimestre"
              schoolGrade={Number(subject.pontuation)}
            />
            <SchoolGrade
              schoolBimester="2° Bimestre"
              schoolGrade={Number(subject.pontuation2)}
            />
            <SchoolGrade
              schoolBimester="3° Bimestre"
              schoolGrade={Number(subject.pontuation3)}
            />
            <SchoolGrade
              schoolBimester="4° Bimestre"
              schoolGrade={Number(subject.pontuation4)}
            />
            <SchoolGrade schoolBimester="Nota final" schoolGrade={average} />
          </ScrollView>
        </View>
        <View
          style={{ elevation: 6 }}
          className="mx-4 mt-6 rounded-lg bg-white px-3 py-6"
        >
          <View className="flex-row justify-between">
            <Text className="font-poppinsSemi text-2xl text-[#636D77]">
              <MaterialCommunityIcons name="paperclip" size={22} /> Avisos do
              Professor
            </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Ionicons
                name="chevron-forward-outline"
                color="#636D77"
                size={26}
              />
            </TouchableOpacity>
          </View>
          <View className="mt-6 gap-2">
            <Text className="font-poppinsSemi text-lg">
              Reunião na próxima semana!
            </Text>
            <Text numberOfLines={2} className="w-72 font-poppinsMedium">
              Pais, na próxima semana haverá uma reunião para discutirmos a nota
              da sua criança.
            </Text>
          </View>
        </View>
      </View>

      <StatusBar style="light" translucent backgroundColor="transparent" />
    </>
  );
}

export default SubjectPage;
