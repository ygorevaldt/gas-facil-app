import { Button } from "@/components/button";
import { router } from "expo-router";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>GÁS FÁCIL</Text>
      </View>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require("@/assets/logo-home.png")}
          resizeMode="contain"
        />
        <Button text="Faça seu pedido" onPress={() => router.navigate("/location")} />
      </View>
    </View>
  );
}
