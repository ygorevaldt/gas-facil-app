import { env } from "@/env";
import { AddressModel } from "@/models";
import { cleanCep } from "@/utils";
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
    cep: cep ? cleanCep(cep.toString()) : 0,
    latitude,
    longitude,
  };
  const response = await axios<AddressModel>({
    method: "POST",
    url: `${env.API_URL}/address`,
    data,
  });

  return response.data;
}
