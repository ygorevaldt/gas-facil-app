import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { LocationHeader } from "@/components/location-header";
import { OptionType } from "@/components/option";
import { OptionsList } from "@/components/options-list.ts";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";

export default function LocationDetails() {
  const options: OptionType[] = [
    { text: "Casa", icon: "house" },
    { text: "Trabalho", icon: "work" },
    { text: "Outro", icon: "add-chart" },
  ];

  const [selected, setSelected] = useState<string>(options[0].text);

  return (
    <View style={styles.container}>
      <LocationHeader />
      <View style={styles.form}>
        <View style={styles.formInputs}>
          <Input label="Número" style={{ flex: 1 }} />
          <Input label="Complemento" style={{ flex: 1 }} />
        </View>
        <Input
          style={styles.formTextArea}
          label="Referência"
          multiline
          numberOfLines={8}
          type="textArea"
        />
      </View>
      <OptionsList />
      <View style={styles.button}>
        <Button text="Confirmar" onPress={() => router.navigate("/catalog")} />
      </View>
    </View>
  );
}
