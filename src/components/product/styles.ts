import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors.blue[500],
    borderRadius: 8,
    padding: 20,
    backgroundColor: colors.blue[200],
    gap: 16,
  },
  content: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  contentHeader: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  contentInfo: {
    fontSize: 16,
  },
  image: {
    height: 70,
    width: 70,
  },
  product: {
    fontSize: 16,
    fontWeight: "bold",
  },
  seller: {
    fontSize: 14,
    color: colors.gray[500],
  },
  evaluation: {
    textAlign: "right",
  },
  price: {
    textAlign: "right",
    color: colors.green[900],
    fontWeight: "bold",
    fontSize: 16,
  },
  bottom: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
