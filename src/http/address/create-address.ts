import { env } from "@/env";
import { AddressModel } from "@/models/address-model";
import axios from "axios";
import { CreateAddressParams } from "../types";

export async function createAddress({
  city,
  district,
  street,
  number,
  complement,
  reference,
  type,
  cep,
  latitude,
  longitude,
  sessionId,
  userId,
}: CreateAddressParams): Promise<AddressModel> {
  const data = {
    user_id: userId,
    session_id: sessionId,
    city,
    district,
    street,
    number,
    complement,
    reference,
    type,
    cep,
    latitude,
    longitude,
  };
  const response = await axios({
    method: "POST",
    url: `${env.API_URL}/address`,
    data,
  });

  const { created_at, updated_at, statusCode, ...rest } = await response.data;

  return {
    ...rest,
    updatedAt: updated_at,
    createdAt: created_at,
  };
}
