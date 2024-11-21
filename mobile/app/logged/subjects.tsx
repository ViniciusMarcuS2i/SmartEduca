import { Text, View } from "react-native";
import SubjectList from "../_components/subject-list";

function Subjects() {
  return (
    <>
      <View className="flex-1 bg-white">
        <View
          style={{ elevation: 4 }}
          className="items-center justify-center bg-white pb-2 pt-14"
        >
          <Text className="font-poppinsMedium text-2xl text-primary">
            Matérias
          </Text>
        </View>
        <View className="px-6">
          <SubjectList />
        </View>
      </View>
    </>
  );
}

export default Subjects;
