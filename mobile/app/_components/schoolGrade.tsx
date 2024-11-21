import { Text, View } from "react-native";

interface SchoolGradeProps {
  schoolGrade: number | string;
  schoolBimester: string;
}

function SchoolGrade({ schoolBimester, schoolGrade }: SchoolGradeProps) {
  return (
    <View className="mt-4 flex-row justify-between px-3">
      <View className="items-center gap-2 self-start">
        <Text className="text-md font-poppinsMedium text-[##646d77]">
          {schoolBimester}
        </Text>
        <View className="h-14 w-14 items-center justify-center rounded-lg border-[1px] border-[#636d77] bg-white">
          <Text
            className={`font-sans text-2xl text-black ${schoolGrade >= "6" ? "text-[#28A745]" : "text-red-700"}`}
          >
            {schoolGrade}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default SchoolGrade;
