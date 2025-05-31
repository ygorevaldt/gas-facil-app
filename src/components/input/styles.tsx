import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 4,
  },
  input: {
    height: 52,
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.blue[500],
    padding: 10,
    fontSize: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
  },
  error: {
    color: colors.red[800],
    fontSize: 14,
  },
});
