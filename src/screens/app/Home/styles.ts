import { StyleSheet } from "react-native";
import { THEME } from "../../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${THEME.COLORS.BACKGROUND}`,
    flexDirection: "column",
    paddingTop: 70,
  },
  profileBox: {
    flexDirection: "row",
    paddingHorizontal: 32,
    justifyContent: "space-between",
  },
  userProfileImage: {
    borderRadius: 14,
    borderWidth: 4,
    borderColor: "#fff",
  },
  welcomeText: {
    fontFamily: `${THEME.FONT.SEMI_BOLD}`,
    fontSize: 30,
    color: `${THEME.COLORS.BLUE_50}`,
  },
  nameText: {
    fontFamily: `${THEME.FONT.SEMI_BOLD}`,
    fontSize: 20,
    color: `${THEME.COLORS.BLACK}`,
  },
});
