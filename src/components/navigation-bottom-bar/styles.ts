import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.blue[500],
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navItem: {
    alignItems: "center",
    fontWeight: 600,
  },
  underline: {
    marginTop: 6,
    height: 4,
    width: 36,
    backgroundColor: colors.white,
    borderRadius: 2,
  },
});
