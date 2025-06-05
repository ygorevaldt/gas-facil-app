import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { v4 as uuid } from "uuid";

type Menu = {
  id: string;
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  action: () => void;
};

export const menus: Menu[] = [
  {
    id: uuid(),
    name: "Configurações",
    icon: "brightness-7",
    action: () => router.push("/"),
  },
  {
    id: uuid(),
    name: "Atualizar endereço",
    icon: "location-on",
    action: () => router.push("/address"),
  },
  {
    id: uuid(),
    name: "Produtos salvos",
    icon: "bookmark-outline",
    action: () => router.push("/bookmarks"),
  },
];
