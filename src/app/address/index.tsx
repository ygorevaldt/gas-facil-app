import { Input } from "@/components/input";
import { OptionsList } from "@/components/options-list.ts";
import { colors } from "@/constants/colors";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Address() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atualize seu endereço para entrega:</Text>
      <View style={styles.form}>
        <View style={styles.formInputs}>
          <Input label="Cep" style={{ flex: 1 }} />
          <Input label="Cidade" style={{ flex: 1 }} />
        </View>
        <View style={styles.formInputs}>
          <Input label="Bairro" style={{ flex: 1 }} />
          <Input label="Número" style={{ flex: 1 }} />
        </View>
        <View style={styles.formInputs}>
          <Input label="Rua" style={{ flex: 1 }} />
        </View>
        <Input
          style={styles.formTextArea}
          label="Referência"
          multiline
          numberOfLines={8}
          type="textArea"
        />
        <OptionsList />
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionsCancelButton} onPress={() => router.back()}>
          <Text style={[styles.actionsTextButton, { color: colors.red[800] }]}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionsConfirmButton}>
          <Text style={styles.actionsTextButton}>Atualizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
