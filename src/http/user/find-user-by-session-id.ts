import { env } from "@/env";
import { UserModel } from "@/models";
import axios from "axios";
import { FindUserBySessionIdParams } from "../types";

export async function findUserBySessionId({
  sessionId,
}: FindUserBySessionIdParams): Promise<UserModel | undefined> {
  try {
    const response = await axios<UserModel>({
      method: "GET",
      url: `${env.API_URL}/user/${sessionId}`,
    });

    return response.data;
  } catch (error) {
    return undefined;
  }
}
