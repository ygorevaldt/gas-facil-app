import { ReactNode } from "react";
import { View } from "react-native";
import { LocationHeader } from "../location-header";
import { NavigationBottomBar } from "../navigation-bottom-bar";
import { styles } from "./styles";

interface LocationNavLayoutProps {
  children: ReactNode;
}

export function LocationNavLayout(props: LocationNavLayoutProps) {
  return (
    <View style={styles.container}>
      <LocationHeader />
      <View style={styles.content}>{props.children}</View>
      <NavigationBottomBar />
    </View>
  );
}
