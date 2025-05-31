import { env } from "@/env";
import { UserModel } from "@/models";
import axios from "axios";
import { FindUserBySessionIdParams } from "../types";

export async function findUserBySessionId({
  sessionId,
}: FindUserBySessionIdParams): Promise<UserModel | undefined> {
  try {
    const response = await axios({
      method: "GET",
      url: `${env.API_URL}/user/${sessionId}`,
    });

    const { id, session_id, created_at, updated_at } = response.data;
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
