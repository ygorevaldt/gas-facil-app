import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { LocationHeader } from "@/components/location-header";
import { OptionsList } from "@/components/options-list";
import { useUser } from "@/hooks";
import { createAddress } from "@/http/address";
import { AddressFormData, addressSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Alert, View } from "react-native";
import { styles } from "./styles";

export default function LocationDetails() {
  const { user, address, updateAddress } = useUser();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      number: address?.number?.toString() || "",
      complement: address?.complement || "",
      reference: address?.reference || "",
      type: address?.type || "Casa",
    },
  });

  const onSubmit = async ({ complement, number, reference, type }: AddressFormData) => {
    const data = {
      ...address,
      complement,
      reference,
      number: Number(number),
      type,
    };
    updateAddress(data);

    try {
      await createAddress({
        ...data,
        sessionId: user.session_id,
        userId: user.id,
        number: Number(data.number),
      });
      Alert.alert("Endereço", "Endereço cadastrado com sucesso!", [
        {
          text: "Ok",
          onPress: () => router.navigate("/catalog"),
        },
      ]);
    } catch (error) {
      Alert.alert(
        "Endereço",
        "Não foi possível salvar o endereço, revise as informações no menu 'Atualizar endereço'"
      );
      console.log(`Error to save address to user ${user.session_id}`);
      if (error instanceof AxiosError) console.error(error.response?.data);
      router.navigate("/catalog");
    }
  };

  return (
    <View style={styles.container}>
      <LocationHeader />
      <View style={styles.form}>
        <View style={styles.formInputs}>
          <Controller
            control={control}
            name="number"
            render={({ field: { onChange, value } }) => (
              <Input
                label="Número"
                style={{ flex: 1 }}
                value={value}
                onChangeText={onChange}
                error={errors.number?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="complement"
            render={({ field: { onChange, value } }) => (
              <Input
                label="Complemento"
                style={{ flex: 1 }}
                value={value}
                onChangeText={onChange}
                error={errors.complement?.message}
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
      </View>
      <OptionsList onSelect={(selected) => setValue("type", selected || "Casa")} />
      <View style={styles.button}>
        <Button text="Confirmar" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}
