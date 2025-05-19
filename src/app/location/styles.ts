import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 32,
    paddingHorizontal: 18,
    paddingVertical: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: "100%",
    paddingHorizontal: 14,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 600,
    textAlign: "center",
  },
  headerSubtitle: {
    fontSize: 16,
    textAlign: "center",
  },
  form: {
    width: "100%",
    gap: 8,
  },
  formLabel: {
    fontSize: 14,
    fontWeight: "bold",
  },
  map: {
    flex: 1,
    width: "100%",
    height: "100%",
    marginBottom: 32,
  },
  skeletonMap: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: colors.gray[300],
    borderRadius: 2,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
  },
  skeletonMapText: {
    color: colors.gray[500],
    fontSize: 16,
  },
});
