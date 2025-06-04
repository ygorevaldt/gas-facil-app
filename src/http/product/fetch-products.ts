import { env } from "@/env";
import { ProductModel } from "@/models/product-model";
import axios from "axios";
import { fetchProductsResponse } from "../types";

export async function fetchProducts(): Promise<ProductModel[] | undefined> {
  try {
    const response = await axios<fetchProductsResponse[]>({
      method: "GET",
      url: `${env.API_URL}/product`,
    });
    const products = response.data;

    return products.map(({ seller, created_at, updated_at, ...rest }) => {
      return {
        ...rest,
        createdAt: created_at,
        updatedAt: updated_at,
        seller: {
          name: seller.name,
          phone: seller.phone,
          openingHours: seller.opening_hours,
        },
      };
    });
  } catch (error) {
    return undefined;
  }
}
