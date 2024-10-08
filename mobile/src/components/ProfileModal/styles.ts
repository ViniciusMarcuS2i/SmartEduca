import { StyleSheet } from "react-native";
import { THEME } from "../../theme/theme";

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: 70,
    paddingHorizontal: 18,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    position: "relative",
  },
  title: {
    fontFamily: "Poppins_400Regular",
    fontSize: 20,
  },
  input: {
    width: "100%",
    height: 65,
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#797979",
    fontSize: 17,
    fontFamily: "Poppins_400Regular",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  submitButton: {
    width: "100%",
    backgroundColor: THEME.COLORS.BLUE_150,
    borderRadius: 12,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
    color: THEME.COLORS.WHITE,
  },
});
