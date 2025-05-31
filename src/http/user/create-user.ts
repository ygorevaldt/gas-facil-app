import { env } from "@/env";
import { UserModel } from "@/models";
import axios from "axios";
import { CreateUserParams } from "../types";

export async function createUser({ sessionId }: CreateUserParams): Promise<UserModel> {
  const response = await axios({
    method: "POST",
    url: `${env.API_URL}/user`,
    data: {
      session_id: sessionId,
    },
  });

  const { id, session_id, created_at, updated_at } = response.data;

  return {
    id: id,
    sessionId: session_id,
    createdAt: created_at,
    updatedAt: updated_at,
  };
}
