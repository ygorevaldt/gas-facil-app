import { MaterialIcons } from "@expo/vector-icons";

export type AddressType = {
  text: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export const addressTypes: AddressType[] = [
  { text: "Casa", icon: "house" },
  { text: "Trabalho", icon: "work" },
  { text: "Outro", icon: "add-chart" },
];
