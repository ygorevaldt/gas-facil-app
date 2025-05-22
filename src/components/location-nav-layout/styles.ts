import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 80,
    gap: 10,
  },
  content: {
    flex: 1,
    gap: 10,
    paddingHorizontal: 18,
  },
  footer: {
    width: "100%",
    backgroundColor: colors.blue[500],
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navItem: {
    fontWeight: 600,
  },
});
