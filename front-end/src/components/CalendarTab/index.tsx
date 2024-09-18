import { View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../utils/localeCalendarConfig";

export function CalendarTab() {
  LocaleConfig.locales["pt-br"] = ptBR;
  LocaleConfig.defaultLocale = "pt-br";
  return (
    <View style={{ flex: 1 }}>
      <View></View>
    </View>
  );
}
