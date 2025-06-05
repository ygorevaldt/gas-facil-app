import { env } from "@/env";
import { AddressModel } from "@/models";
import axios from "axios";
import { findAddressParams } from "../types";

export async function findAddress({
  sessionId,
}: findAddressParams): Promise<AddressModel | undefined> {
  try {
    const response = await axios<AddressModel>({
      method: "GET",
      url: `${env.API_URL}/address/${sessionId}`,
    });
    return response.data;
  } catch (error) {
    return undefined;
  }
}
