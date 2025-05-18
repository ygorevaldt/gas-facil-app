import { env } from "@/env";
import { AddressModel } from "@/models";
import { findAddressParams } from "../types";

export async function findAddress({
  sessionId,
}: findAddressParams): Promise<AddressModel | undefined> {
  try {
    const params = new URLSearchParams({
      session_id: sessionId,
    });
    const response = await fetch(`${env.API_URL}/addresses?${params.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const [responseJson] = await response.json();
    const {
      id,
      session_id,
      city,
      district,
      street,
      number,
      complement,
      cep,
      created_at,
      updated_at,
    } = responseJson;

    return {
      id: id,
      sessionId: session_id,
      city: city,
      district: district,
      street: street,
      number: number,
      complement: complement,
      cep: cep,
      createdAt: created_at,
      updatedAt: updated_at,
    } as AddressModel;
  } catch (error) {
    console.log("error", error);
    return undefined;
  }
}
