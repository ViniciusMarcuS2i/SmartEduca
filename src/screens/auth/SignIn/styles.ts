import { StyleSheet } from "react-native";
import { THEME } from "../../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${THEME.COLORS.BACKGROUND}`,
    paddingTop: 68,
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    height: 266,
    width: 266,
  },
  inputSeparator: {
    width: "100%",
    gap: 20,
    marginTop: 55,
    marginBottom: 50,
  },
  noAccount: {
    marginTop: 33,
    flexDirection: "row",
    gap: 4,
  },
  noAccountText: {
    fontFamily: `${THEME.FONT.REGULAR}`,
    fontSize: 16,
  },
  signUpText: {
    fontFamily: `${THEME.FONT.REGULAR}`,
    fontSize: 16,
    color: `${THEME.COLORS.BLUE_150}`,
  },
  label: {
    color: `${THEME.COLORS.GRAY_500}`,
    fontSize: 16,
    fontFamily: `${THEME.FONT.REGULAR}`,
  },
  textInput: {
    fontSize: 16,
    height: 53,
    width: "100%",
    backgroundColor: `${THEME.COLORS.WHITE}`,
    fontFamily: `${THEME.FONT.REGULAR}`,
    borderRadius: 8,
    paddingLeft: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  textInputError: {
    fontSize: 16,
    height: 53,
    width: "100%",
    backgroundColor: `${THEME.COLORS.WHITE}`,
    fontFamily: `${THEME.FONT.REGULAR}`,
    borderRadius: 8,
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: "red",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  inputContainer: {
    flexDirection: "column",
    alignSelf: "flex-start",
    paddingHorizontal: 34,
    width: "100%",
    gap: 11,
  },
  textErrorMessage: {
    marginTop: -8,
    fontSize: 14,
    color: "red",
    fontFamily: "Exo_400Regular",
  },
});
