import { useProduct } from "@/hooks";
import { evaluateProduct } from "@/http/product";
import { ProductModel } from "@/models/product-model";
import { useState } from "react";
import { Alert, Modal, ModalProps, Text, TouchableOpacity, View } from "react-native";
import { StarRating } from "../star-rating";
import { styles } from "./styles";

interface EvaluateModalProps extends ModalProps {
  setShowModal: (value: boolean) => void;
  product: ProductModel;
}

export function EvaluateModal({ product, setShowModal, ...rest }: EvaluateModalProps) {
  const [rating, setRating] = useState(0);
  const { setSelectedProduct } = useProduct();

  async function handleConfirm() {
    try {
      const updatedProduct = await evaluateProduct(product, rating);
      setSelectedProduct(Object.assign(product, updatedProduct));
      setShowModal(false);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível avaliar o produto, tente novamente mais tarde");
      console.error(error);
    }
  }

  function handleCancel() {
    setRating(0);
    setShowModal(false);
  }

  return (
    <Modal {...rest} animationType="fade">
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.evaluateProduct}>
            <Text style={styles.title}>Avaliar produto</Text>
            <StarRating rating={rating} onRate={setRating} size={30} />
          </View>
          <View style={styles.actions}>
            <TouchableOpacity onPress={handleCancel}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleConfirm}>
              <Text style={styles.confirmText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
