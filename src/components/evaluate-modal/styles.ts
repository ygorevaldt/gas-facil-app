import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
  },
  content: {
    backgroundColor: colors.white,
    padding: 24,
    gap: 50,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.blue[500],
    elevation: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    width: "92%",
  },
  evaluateProduct: {
    gap: 12,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  actions: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cancelText: {
    textAlign: "center",
    color: colors.red[800],
    fontSize: 16,
    fontWeight: "bold",
  },
  confirmText: {
    textAlign: "center",
    color: colors.blue[500],
    fontSize: 16,
    fontWeight: "bold",
  },
});
