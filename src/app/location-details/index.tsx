import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Option, OptionType } from "@/components/option";
import { colors } from "@/constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
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
      <View style={styles.header}>
        <MaterialIcons name="location-pin" color={colors.blue[500]} size={32} />
        <View>
          <Text style={styles.headerTitle}>R, José Guimarães, 4360</Text>
          <Text style={styles.headerSubtitle}>Centro, Terra de Areia - RS, 95535-000</Text>
        </View>
      </View>
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
      <View style={styles.options}>
        <Text style={styles.optionsLabel}>Selecionar como:</Text>
        <View style={styles.optionsList}>
          {options.map((item) => (
            <Option
              key={item.text}
              text={item.text}
              icon={item.icon}
              isSelected={selected === item.text}
              onPress={() => setSelected(item.text)}
            />
          ))}
        </View>
      </View>
      <View style={styles.button}>
        <Button text="Confirmar" onPress={() => router.navigate("/catalog")} />
      </View>
    </View>
  );
}
