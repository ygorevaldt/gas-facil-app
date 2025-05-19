import { Input } from "@/components/input";
import { View } from "react-native";
import { styles } from "./styles";

interface FormProps {
  address: string;
  setAddress: (address: string) => void;
}

export function Form(props: FormProps) {
  return (
    <View style={styles.form}>
      <Input
        placeholder="Digite seu endereço ou CEP"
        value={props.address}
        onChangeText={props.setAddress}
        label="Endereço:"
      />
    </View>
  );
}
