import { StyleSheet } from "react-native";
import { THEME } from "../../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
    paddingTop: 70,
  },
  gradient: {
    marginHorizontal: 18,
    borderRadius: 22,
    alignItems: "center",
    paddingVertical: 24,
    position: "relative",
  },
  userImg: {
    width: 100,
    height: 100,
    borderRadius: 999,
    marginBottom: 12,
  },
  userName: {
    fontFamily: THEME.FONT.SEMI_BOLD,
    color: THEME.COLORS.WHITE,
    fontSize: 18,
  },
  class: {
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONT.REGULAR,
  },
});
