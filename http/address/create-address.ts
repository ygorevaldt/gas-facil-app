import { env } from "@/env";
import { AddressModel } from "@/models";
import { randomUUID } from "node:crypto";
import { CreateAddressParams } from "../types";

export async function createAddress({
  city,
  district,
  street,
  number,
  complement,
  cep,
  sessionId,
}: CreateAddressParams): Promise<AddressModel> {
  const response = await fetch(`${env.API_URL}/clients`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: randomUUID(),
      session_id: sessionId,
      city,
      district,
      street,
      number,
      complement,
      cep,
      created_at: new Date(),
      updated_at: new Date(),
    }),
  });

  const { data } = await response.json();

  return {
    id: data.id,
    sessionId: data.session_id,
    city: data.city,
    district: data.district,
    street: data.street,
    number: data.number,
    complement: data.complement,
    cep: data.cep,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };
}
