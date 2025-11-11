import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors.orange[500],
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  content: {
    gap: 8,
    justifyContent: "flex-start",
    textAlign: "left",
    paddingHorizontal: 16,
  },
  contentInfo: {},
  imageContainer: {
    height: 115,
    width: 120,
    borderWidth: 1,
    borderColor: colors.orange[500],
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
  starRating: {
    width: "100%",
    alignItems: "flex-start",
  },
  price: {
    textAlign: "left",
    color: colors.green[500],
    fontWeight: "bold",
    fontSize: 14,
  },
});
