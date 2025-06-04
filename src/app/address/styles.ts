import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingVertical: 70,
    gap: 32,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  form: {
    gap: 16,
  },
  formInputs: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 16,
  },
  formTextArea: {
    height: 210,
    textAlignVertical: "top",
  },
  actions: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  actionsCancelButton: {
    borderWidth: 1,
    borderColor: colors.red[800],
    color: colors.red[800],
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
    flex: 1,
  },
  actionsConfirmButton: {
    borderColor: colors.green[900],
    borderWidth: 1,
    backgroundColor: colors.green[900],
    color: colors.white,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
    flex: 1,
  },
  actionsTextButton: {
    fontSize: 16,
    textAlign: "center",
    color: colors.white,
  },
});
