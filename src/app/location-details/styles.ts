import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 32,
    paddingVertical: 80,
    paddingHorizontal: 18,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 16,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  headerSubtitle: {
    fontSize: 16,
    color: colors.gray[500],
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
  options: {
    width: "100%",
    marginTop: 32,
    gap: 8,
  },
  optionsLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "left",
  },
  optionsList: {
    flexDirection: "row",
    gap: 8,
    width: "100%",
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 64,
  },
});
