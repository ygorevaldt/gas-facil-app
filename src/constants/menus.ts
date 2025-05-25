import { MaterialIcons } from "@expo/vector-icons";
import { v4 as uuid } from "uuid";

type Menu = {
  id: string;
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export const menus: Menu[] = [
  {
    id: uuid(),
    name: "Configurações",
    icon: "brightness-7",
  },
  {
    id: uuid(),
    name: "Atualizar endereço",
    icon: "location-on",
  },
  {
    id: uuid(),
    name: "Produtos salvos",
    icon: "bookmark-outline",
  },
];
