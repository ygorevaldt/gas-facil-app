import { env } from "@/env";
import { UserModel } from "@/models";
import axios from "axios";

export async function favoriteProduct(user: UserModel, productId: string) {
  try {
    const isBookmark = user.bookmarks.find((item) => item === productId) ? true : false;

    const bookmarks = isBookmark
      ? user.bookmarks.filter((id) => id !== productId)
      : [productId, ...user.bookmarks];

    const response = await axios({
      method: "PATCH",
      url: `${env.API_URL}/user/bookmarks`,
      data: {
        user_id: user.id,
        bookmarks,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Não foi possível salvar produto como favorito", error);
  }
}
