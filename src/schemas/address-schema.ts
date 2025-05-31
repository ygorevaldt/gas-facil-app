import { z } from "zod";

export const addressSchema = z.object({
  number: z.string().min(1, "Número é obrigatório"),
  complement: z.string().min(1, "Complemento é obrigatório"),
  reference: z.string().min(1, "Referência é obrigatória"),
  type: z.string().min(1, "Tipo de endereço é obrigatório"),
});

export type AddressFormData = z.infer<typeof addressSchema>;
