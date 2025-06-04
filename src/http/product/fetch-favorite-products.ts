import { env } from "@/env";
import { ProductModel } from "@/models/product-model";
import axios from "axios";
import { fetchProductsResponse } from "../types";

export async function fetchFavoriteProducts(): Promise<ProductModel[] | undefined> {
  try {
    const response = await axios<fetchProductsResponse[]>({
      method: "GET",
      url: `${env.API_URL}/product`,
    });
    const products = response.data;

    return products.map((product) => {
      return {
        ...product,
        createdAt: product.created_at,
        updatedAt: product.updated_at,
      };
    });
  } catch (error) {
    return undefined;
  }
}
