import { env } from "@/env";
import { ProductModel } from "@/models";
import axios from "axios";

export async function fetchProducts(): Promise<ProductModel[] | undefined> {
  try {
    const response = await axios<ProductModel[]>({
      method: "GET",
      url: `${env.API_URL}/product`,
    });
    return response.data;
  } catch (error) {
    return [];
  }
}
