import { env } from "@/env";
import { UserModel } from "@/models";
import { v4 as uuid } from "uuid";
import { CreateUserParams } from "../types";

export async function createUser({ sessionId }: CreateUserParams): Promise<UserModel> {
  const response = await fetch(`${env.API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: uuid(),
      session_id: sessionId,
      created_at: new Date(),
      updated_at: new Date(),
    }),
  });

  const responseJson = await response.json();
  const { id, session_id, created_at, updated_at } = responseJson;

  return {
    id: id,
    sessionId: session_id,
    createdAt: created_at,
    updatedAt: updated_at,
  };
}
