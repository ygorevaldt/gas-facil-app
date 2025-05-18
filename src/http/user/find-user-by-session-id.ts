import { env } from "@/env";
import { UserModel } from "@/models";
import { FindUserBySessionIdParams } from "../types";

export async function findUserBySessionId({
  sessionId,
}: FindUserBySessionIdParams): Promise<UserModel | undefined> {
  try {
    const params = new URLSearchParams({
      session_id: sessionId,
    });

    const response = await fetch(`${env.API_URL}/users?${params.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const [responseJson] = await response.json();

    const { id, session_id, created_at, updated_at } = responseJson;

    return {
      id: id,
      sessionId: session_id,
      createdAt: created_at,
      updatedAt: updated_at,
    };
  } catch (error) {
    return undefined;
  }
}
