import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors.orange[500],
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 20,
    gap: 8,
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
    fontSize: 15,
  },
  image: {
    height: 70,
    width: 70,
  },
  product: {
    fontSize: 18,
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
    color: colors.green[500],
    fontWeight: "bold",
    fontSize: 16,
  },
  bottom: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerSeller: {
    flexDirection: "column",
    paddingVertical: 10,
  },
  headerSeller: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderTopWidth: 1,
    borderTopColor: colors.orange[100],
    paddingTop: 20,
    paddingBottom: 16,
  },
  headerTitleSeller: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.black,
  },
  contentSeller: {
    gap: 4,
  },
  contentItemSeller: {
    flexDirection: "row",
    gap: 8,
  },
  labelSeller: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
