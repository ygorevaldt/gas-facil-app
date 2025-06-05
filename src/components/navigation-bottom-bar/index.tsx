import { useState } from "react";
import { View } from "react-native";
import { NavItem } from "./nav-item";
import { styles } from "./styles";

export function NavigationBottomBar() {
  const [selected, setSelected] = useState("house");

  return (
    <View style={styles.container}>
      <NavItem
        icon="house"
        target="/catalog"
        onSelect={() => setSelected("house")}
        selected={selected === "house"}
      />
      <NavItem
        icon="bookmark-outline"
        target="/bookmarks"
        onSelect={() => setSelected("bookmark-outline")}
        selected={selected === "bookmark-outline"}
      />
      <NavItem
        icon="menu"
        target="/menu"
        onSelect={() => setSelected("menu")}
        selected={selected === "menu"}
      />
    </View>
  );
}
