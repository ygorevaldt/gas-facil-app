import { Button } from "@/components/button";
import { EvaluateModal } from "@/components/evaluate-modal";
import { LocationNavLayout } from "@/components/location-nav-layout";
import { Product } from "@/components/product";
import { Seller } from "@/components/seller";
import { colors } from "@/constants/colors";
import { useProduct, useUser } from "@/hooks";
import { router } from "expo-router";
import { useState } from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Order() {
  const { selectedProduct } = useProduct();
  const { address } = useUser();
  const [showModal, setShowModal] = useState(false);

  async function handleRedirectToWhatsapp() {
    const message = encodeURIComponent(
      `Olá, gostaria de comprar um ${selectedProduct?.name} \nO endereço para entrega é: \nCidade: ${address?.city} \nBairro: ${address?.district} \nRua: ${address?.street} \nNúmero: ${address?.number}`
    );
    const rawPhone = selectedProduct?.seller?.phone ?? "";
    const sanitizedPhone = rawPhone.startsWith("55") ? rawPhone.slice(2) : rawPhone;

    const url = `https://wa.me/55${sanitizedPhone}?text=${message}`;

    Linking.openURL(url).catch((err) => console.error("Erro ao abrir o WhatsApp:", err));
  }

  function handleEvaluateProduct() {
    setShowModal(true);
  }

  return (
    <>
      <LocationNavLayout title="Realizar novo pedido">
        <Product product={selectedProduct!} />
        <Seller seller={selectedProduct?.seller!} />
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionsCancelButton} onPress={() => router.back()}>
            <Text style={[styles.actionsTextButton, { color: colors.gray[500] }]}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionsEvaluateButton} onPress={handleEvaluateProduct}>
            <Text style={styles.actionsTextButton}>Avaliar</Text>
          </TouchableOpacity>
        </View>
        <Button
          text="Comprar"
          style={{ width: "100%", backgroundColor: colors.green[900] }}
          onPress={handleRedirectToWhatsapp}
          icon="whatsapp"
        />
      </LocationNavLayout>
      <EvaluateModal
        transparent
        visible={showModal}
        setShowModal={setShowModal}
        product={selectedProduct!}
      />
    </>
  );
}
