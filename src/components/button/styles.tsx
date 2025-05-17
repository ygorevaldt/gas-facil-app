import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue[500],
    borderRadius: 10,
    paddingVertical: 16,
    marginBottom: 64,
  },
  text: {
    color: colors.gray[100],
    fontSize: 20,
  },
});
