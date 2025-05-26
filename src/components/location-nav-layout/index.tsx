import { ReactNode } from "react";
import { Text, View } from "react-native";
import { LocationHeader } from "../location-header";
import { NavigationBottomBar } from "../navigation-bottom-bar";
import { styles } from "./styles";

interface LocationNavLayoutProps {
  children: ReactNode;
  title: string;
}

export function LocationNavLayout(props: LocationNavLayoutProps) {
  return (
    <View style={styles.container}>
      <LocationHeader />
      <View style={styles.content}>
        <Text style={styles.title}>{props.title}</Text>
        {props.children}
      </View>
      <NavigationBottomBar />
    </View>
  );
}
