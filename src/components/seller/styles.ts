import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.blue[200],
    borderRadius: 8,
    borderColor: colors.blue[500],
    borderWidth: 1,
  },
  header: {
    backgroundColor: colors.blue[500],
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 12,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.white,
  },
  content: {
    padding: 12,
    gap: 12,
  },
  contentItem: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
