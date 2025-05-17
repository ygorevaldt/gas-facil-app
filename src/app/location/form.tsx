import { Input } from "@/components/input";
import { Text, View } from "react-native";
import { styles } from "./styles";

interface FormProps {
  address: string;
  setAddress: (address: string) => void;
}

export function Form(props: FormProps) {
  return (
    <View style={styles.form}>
      <Text style={styles.formLabel}>Endereço:</Text>
      <Input
        placeholder="Digite seu endereço ou CEP"
        value={props.address}
        onChangeText={props.setAddress}
      />
    </View>
  );
}
