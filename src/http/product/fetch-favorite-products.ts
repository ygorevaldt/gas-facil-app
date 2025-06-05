import { env } from "@/env";
import { ProductModel } from "@/models";
import axios from "axios";

export async function fetchFavoriteProducts(userId: string): Promise<ProductModel[] | undefined> {
  try {
    const response = await axios<ProductModel[]>({
      method: "GET",
      url: `${env.API_URL}/user/bookmarks/${userId}`,
    });
    return response.data;
  } catch (error) {
    return [];
  }
}
