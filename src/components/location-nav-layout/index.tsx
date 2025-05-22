import { ReactNode } from "react";
import { View } from "react-native";
import { LocationHeader } from "../location-header";
import { NavItem } from "./nav-item";
import { styles } from "./styles";

interface LocationNavLayoutProps {
  children: ReactNode;
}

export function LocationNavLayout(props: LocationNavLayoutProps) {
  return (
    <View style={styles.container}>
      <LocationHeader />
      <View style={styles.content}>{props.children}</View>
      <View style={styles.footer}>
        <NavItem icon="house" target="/catalog" />
        <NavItem icon="saved-search" target="/saved" />
        <NavItem icon="menu" target="/menu" />
      </View>
    </View>
  );
}
