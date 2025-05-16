import { Image, View } from "react-native";
import { Button } from "./button";
import { Header } from "./header";
import { styles } from "./styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require("@/assets/logo-home.png")}
          resizeMode="contain"
        />
        <Button />
      </View>
    </View>
  );
}
