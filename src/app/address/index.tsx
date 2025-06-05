import { Input } from "@/components/input";
import { OptionsList } from "@/components/options-list";
import { colors } from "@/constants/colors";
import { useUser } from "@/hooks";
import { updateAddress } from "@/http/address/update-address";
import { UpdateAddressFormData, updateAddressSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router"; // ou useNavigation
import { Controller, useForm } from "react-hook-form";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Address() {
  const { address, updateAddress: updAddress, user } = useUser();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UpdateAddressFormData>({
    resolver: zodResolver(updateAddressSchema),
    defaultValues: {
      cep: address?.cep,
      city: address?.city,
      number: address?.number ?? 0,
      street: address?.street,
      reference: address?.reference,
      district: address?.district,
      type: address?.type ?? "Casa",
    },
  });

  const onSubmit = async (data: UpdateAddressFormData) => {
    try {
      await updateAddress({
        ...data,
        sessionId: user.session_id,
        userId: user.id,
      });
      updAddress(data);
      Alert.alert("Endereço", "Endereço atualizado com sucesso!");
      router.back();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível atualizar o endereço.");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atualize seu endereço para entrega:</Text>
      <View style={styles.form}>
        <View style={styles.formInputs}>
          <Controller
            control={control}
            name="cep"
            render={({ field: { onChange, value } }) => (
              <Input
                label="CEP"
                style={{ flex: 1 }}
                value={value?.toString()}
                onChangeText={onChange}
                error={errors.cep?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="city"
            render={({ field: { onChange, value } }) => (
              <Input
                label="Cidade"
                style={{ flex: 1 }}
                value={value}
                onChangeText={onChange}
                error={errors.city?.message}
              />
            )}
          />
        </View>

        <View style={styles.formInputs}>
          <Controller
            control={control}
            name="district"
            render={({ field: { onChange, value } }) => (
              <Input
                label="Bairro"
                style={{ flex: 1 }}
                value={value}
                onChangeText={onChange}
                error={errors.district?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="number"
            render={({ field: { onChange, value } }) => (
              <Input
                label="Número"
                style={{ flex: 1 }}
                value={value?.toString()}
                onChangeText={onChange}
                error={errors.number?.message}
              />
            )}
          />
        </View>

        <View style={styles.formInputs}>
          <Controller
            control={control}
            name="street"
            render={({ field: { onChange, value } }) => (
              <Input
                label="Rua"
                style={{ flex: 1 }}
                value={value}
                onChangeText={onChange}
                error={errors.street?.message}
              />
            )}
          />
        </View>

        <Controller
          control={control}
          name="reference"
          render={({ field: { onChange, value } }) => (
            <Input
              style={styles.formTextArea}
              label="Referência"
              multiline
              numberOfLines={8}
              type="textArea"
              value={value}
              onChangeText={onChange}
              error={errors.reference?.message}
            />
          )}
        />

        <OptionsList
          onSelect={(selected) => setValue("type", selected || "Casa")}
          type={address?.type}
        />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionsCancelButton} onPress={() => router.back()}>
          <Text style={[styles.actionsTextButton, { color: colors.red[800] }]}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionsConfirmButton} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.actionsTextButton}>Atualizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
