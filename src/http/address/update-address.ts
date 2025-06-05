import { env } from "@/env";
import { AddressModel } from "@/models";
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
  const response = await axios<AddressModel>({
    method: "PUT",
    url: `${env.API_URL}/address`,
    data: {
      user_id: userId,
      session_id: sessionId,
      city,
      district,
      street,
      number,
      reference,
      type,
      cep,
    },
  });

  return response.data;
}
