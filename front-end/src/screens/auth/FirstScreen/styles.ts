import { StyleSheet } from "react-native";
import { THEME } from "../../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${THEME.COLORS.BACKGROUND}`,
    paddingTop: 73,
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    height: 324,
    width: 324,
  },
  h1: {
    fontSize: 20,
    fontFamily: `${THEME.FONT.BOLD}`,
    marginTop: 35,
  },
  p: {
    fontSize: 18,
    fontFamily: `${THEME.FONT.REGULAR}`,
    marginTop: 16,
    marginBottom: 127,
    color: `${THEME.COLORS.GRAY_500}`,
  },

  alreadyHaveAccountText: {
    color: `${THEME.COLORS.BLUE_50}`,
    fontFamily: `${THEME.FONT.REGULAR}`,
    marginTop: 33,
  },
});
