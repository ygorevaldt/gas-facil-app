import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 75,
    padding: 15,
    backgroundColor: colors.blue[500],
  },
  headerText: {
    fontSize: 20,
    fontWeight: 600,
    color: colors.gray[100],
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "70%",
  },
  button: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue[500],
    borderRadius: 10,
    paddingVertical: 16,
    marginBottom: 64,
  },
  buttonText: {
    color: colors.gray[100],
    fontSize: 20,
  },
});
