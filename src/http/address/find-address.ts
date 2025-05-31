import { env } from "@/env";
import { AddressModel } from "@/models";
import axios from "axios";
import { findAddressParams } from "../types";

export async function findAddress({
  sessionId,
}: findAddressParams): Promise<AddressModel | undefined> {
  try {
    const response = await axios({
      method: "GET",
      url: `${env.API_URL}/address/${sessionId}`,
    });
    const { created_at, updated_at, ...rest } = response.data;

    return {
      ...rest,
      createdAt: created_at,
      updatedAt: updated_at,
    };
  } catch (error) {
    return undefined;
  }
}
