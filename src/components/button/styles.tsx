import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "70%",
    minWidth: "70%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue[500],
    borderRadius: 10,
    paddingVertical: 16,
    marginBottom: 64,
    flexDirection: "row",
    gap: 8,
  },
  text: {
    color: colors.white,
    fontSize: 20,
  },
});
