import { env } from "@/env";
import { AddressModel } from "@/models/address-model";
import axios from "axios";
import { UpdateAddressParams } from "../types";

export async function updateAddress({
  city,
  district,
  street,
  number,
  reference,
  type,
  cep,
  sessionId,
  userId,
}: UpdateAddressParams): Promise<AddressModel> {
  const data = {
    user_id: userId,
    session_id: sessionId,
    city,
    district,
    street,
    number,
    reference,
    type,
    cep,
  };
  const response = await axios({
    method: "PUT",
    url: `${env.API_URL}/address`,
    data,
  });

  const { created_at, updated_at, ...rest } = await response.data;

  return {
    ...rest,
    updatedAt: updated_at,
    createdAt: created_at,
  };
}
