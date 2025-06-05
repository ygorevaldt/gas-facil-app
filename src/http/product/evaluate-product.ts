import { env } from "@/env";
import { ProductModel } from "@/models/product-model";
import axios from "axios";

export async function evaluateProduct(product: ProductModel, note: number) {
  const sumNote = product.sum_note + note;
  const amountNotes = product.amount_notes + 1;
  product.note = sumNote / amountNotes;

  const data = {
    id: product.id,
    sum_note: sumNote,
    amount_notes: amountNotes,
    note: product.note,
  };
  const response = (
    await axios<ProductModel>({
      method: "PUT",
      url: `${env.API_URL}/product`,
      data,
    })
  ).data;

  return response;
}
