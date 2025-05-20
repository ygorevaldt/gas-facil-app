import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderColor: colors.blue[500],
    borderWidth: 1,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    flex: 1,
    gap: 8,
  },
  text: {
    color: colors.white,
    fontSize: 16,
  },
});
