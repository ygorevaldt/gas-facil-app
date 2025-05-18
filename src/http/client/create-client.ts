import { env } from "@/env";
import { ClientModel } from "@/models";
import { randomUUID } from "node:crypto";
import { CreateClientParams } from "../types";

export async function createClient({ sessionId }: CreateClientParams): Promise<ClientModel> {
  const response = await fetch(`${env.API_URL}/clients`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: randomUUID(),
      session_id: sessionId,
      created_at: new Date(),
      updated_at: new Date(),
    }),
  });

  const { data } = await response.json();

  return {
    id: data.id,
    sessionId: data.session_id,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };
}
