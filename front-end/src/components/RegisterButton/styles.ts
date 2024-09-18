import { StyleSheet } from "react-native";
import { THEME } from "../../theme/theme";

export const styles = StyleSheet.create({
  signUpButton: {
    height: 51,
    paddingHorizontal: 50,
    backgroundColor: `${THEME.COLORS.BLUE_50}`,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: `${THEME.COLORS.WHITE}`,
    fontSize: 16,
    fontFamily: `${THEME.FONT.SEMI_BOLD}`,
  },
});
