import { addressTypes } from "@/constants/address-type";
import { useState } from "react";
import { Text, View } from "react-native";
import { Option } from "../option";
import { styles } from "./styles";

interface OptionsList {
  label?: string;
}

export function OptionsList(props: OptionsList) {
  const [selected, setSelected] = useState<string>(addressTypes[0].text);

  return (
    <View style={styles.container}>
      <Text style={styles.optionsLabel}>{props.label ?? "Selecionar como:"}</Text>
      <View style={styles.optionsList}>
        {addressTypes.map((item) => (
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
  );
}
