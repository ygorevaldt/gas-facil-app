import { addressTypes } from "@/constants/address-type";
import { useState } from "react";
import { Text, View } from "react-native";
import { Option } from "../option";
import { styles } from "./styles";

interface OptionsList {
  label?: string;
  onSelect?: (value: string) => void;
  type?: string;
}

export function OptionsList(props: OptionsList) {
  const [selected, setSelected] = useState<string>(props.type ?? "Casa");

  const handleSelect = (value: string) => {
    setSelected(value);
    props.onSelect?.(value);
  };

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
            onPress={() => handleSelect(item.text)}
          />
        ))}
      </View>
    </View>
  );
}
