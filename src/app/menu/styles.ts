import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 32,
  },
  header: {
    justifyContent: "flex-start",
    alignItems: "baseline",
    paddingTop: 58,
    paddingHorizontal: 32,
    paddingBottom: 24,
    backgroundColor: colors.blue[500],
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.white,
  },
  listItem: {
    width: "100%",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[300],
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  listItemIcon: {},
  listItemText: {
    fontSize: 16,
  },
});
