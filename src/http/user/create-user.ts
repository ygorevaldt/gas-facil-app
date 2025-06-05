import { env } from "@/env";
import { UserModel } from "@/models";
import axios from "axios";
import { CreateUserParams } from "../types";

export async function createUser({ sessionId }: CreateUserParams): Promise<UserModel> {
  const response = await axios<UserModel>({
    method: "POST",
    url: `${env.API_URL}/user`,
    data: {
      session_id: sessionId,
    },
  });

  return response.data;
}
