import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Calendar() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-center font-poppinsSemi text-2xl">Em breve</Text>
    </SafeAreaView>
  );
}

export default Calendar;
