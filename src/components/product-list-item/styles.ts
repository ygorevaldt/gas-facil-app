import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors.blue[500],
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: colors.blue[200],
  },
  content: {
    width: "100%",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  contentInfo: {},
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
  starRating: {
    width: "100%",
    alignItems: "flex-end",
  },
});
