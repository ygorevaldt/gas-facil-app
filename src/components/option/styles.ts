import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderColor: colors.blue[500],
    borderRadius: 6,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  text: {
    color: colors.white,
    fontSize: 16,
  },
});
