import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  actions: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    marginTop: 32,
  },
  actionsCancelButton: {
    borderWidth: 1,
    borderColor: colors.gray[500],
    color: colors.gray[500],
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
    flex: 1,
  },
  actionsEvaluateButton: {
    borderColor: colors.blue[500],
    borderWidth: 1,
    backgroundColor: colors.blue[500],
    color: colors.white,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  actionsTextButton: {
    fontSize: 16,
    textAlign: "center",
    color: colors.white,
  },
});
