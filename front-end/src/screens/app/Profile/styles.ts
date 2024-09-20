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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
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
  arrowBack: {
    backgroundColor: THEME.COLORS.WHITE,
    padding: 2,
    borderRadius: 999,
    position: "absolute",
    left: 20,
    top: 20,
  },
  settings: {
    backgroundColor: THEME.COLORS.WHITE,
    padding: 2,
    borderRadius: 999,
    position: "absolute",
    right: 20,
    top: 20,
  },
  detailsContainer: {
    backgroundColor: THEME.COLORS.WHITE,
    marginTop: 18,
    marginHorizontal: 18,
    borderRadius: 22,
    flexDirection: "column",
    padding: 20,
    gap: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  detailsContainerTitle: {
    fontSize: 18,
    fontFamily: THEME.FONT.BOLD,
  },
  detailsContainerInfosText: {
    fontSize: 14,
    fontFamily: THEME.FONT.SEMI_BOLD,
    color: THEME.COLORS.GRAY_500,
  },
});
