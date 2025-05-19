import { env } from "@/env";
import { AddressModel } from "@/models/address-model";
import { v4 as uuid } from "uuid";
import { CreateAddressParams } from "../types";

export async function createAddress({
  city,
  district,
  street,
  number,
  complement,
  cep,
  latitude,
  longitude,
  sessionId,
}: CreateAddressParams): Promise<AddressModel> {
  const response = await fetch(`${env.API_URL}/addresses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: uuid(),
      session_id: sessionId,
      city,
      district,
      street,
      number,
      complement,
      cep,
      latitude,
      longitude,
      created_at: new Date(),
      updated_at: new Date(),
    }),
  });

  const responseJson = await response.json();

  return {
    id: responseJson?.id,
    sessionId: responseJson.session_id,
    city: responseJson.city,
    district: responseJson.district,
    street: responseJson.street,
    number: responseJson.number,
    complement: responseJson.complement,
    cep: responseJson.cep,
    latitude: responseJson.latitude,
    longitude: responseJson.longitude,
    createdAt: responseJson.created_at,
    updatedAt: responseJson.updated_at,
  };
}
