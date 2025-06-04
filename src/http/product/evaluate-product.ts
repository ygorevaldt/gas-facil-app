import { env } from "@/env";
import { ProductModel } from "@/models/product-model";
import axios from "axios";

export async function evaluateProduct(product: ProductModel, note: number) {
  const sumNote = product.sumNote + note;
  const amountNotes = product.amountNotes + 1;
  product.note = sumNote / amountNotes;

  console.log(sumNote);
  console.log(amountNotes);
  console.log(product.note);

  const data = {
    sum_note: sumNote,
    amount_notes: amountNotes,
    note: product.note,
  };
  await axios({
    method: "PUT",
    url: `${env.API_URL}/product`,
    data,
  });
}
