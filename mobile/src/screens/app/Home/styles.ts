import { Dimensions, StyleSheet } from "react-native";
import { THEME } from "../../../theme/theme";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
    flexDirection: "column",
    paddingTop: 70,
  },
  profileBox: {
    flexDirection: "row",
    paddingHorizontal: 18,
    justifyContent: "space-between",
  },
  userProfileImage: {
    borderRadius: 999,
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: THEME.COLORS.BLUE_700,
  },
  welcomeText: {
    fontFamily: THEME.FONT.SEMI_BOLD,
    fontSize: 15,
    color: THEME.COLORS.GRAY_500,
  },
  nameText: {
    fontFamily: THEME.FONT.BOLD,
    fontSize: 22,
    color: THEME.COLORS.BLUE_150,
  },
  whiteContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: THEME.COLORS.WHITE,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: 30,
    paddingTop: 18,
  },
  noticeContainer: {
    marginVertical: 26,
    marginHorizontal: 18,
    height: 120,
    borderRadius: 18,

    backgroundColor: THEME.COLORS.BLUE_150,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  categoriesListTitle: {
    fontFamily: THEME.FONT.BOLD,
    fontSize: 22,
    color: THEME.COLORS.GRAY_500,
    marginHorizontal: 18,
  },
});
