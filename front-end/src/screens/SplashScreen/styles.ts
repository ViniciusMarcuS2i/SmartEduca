import { StyleSheet } from "react-native";
import { THEME } from "../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BLUE_150,
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontFamily: THEME.FONT.BOLD,
    color: THEME.COLORS.WHITE,
    fontSize: 40,
  },
});
