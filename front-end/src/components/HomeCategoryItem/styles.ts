import { Dimensions, StyleSheet, useWindowDimensions } from "react-native";
import { THEME } from "../../theme/theme";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: THEME.COLORS.BLUE_150,
    alignSelf: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 26,
    gap: 15,
    width: width / 2 - 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 3,
  },
  categoryName: {
    color: THEME.COLORS.WHITE,
    fontSize: 16,
    fontFamily: THEME.FONT.REGULAR,
    lineHeight: 23,
  },
  icon: {},
});
