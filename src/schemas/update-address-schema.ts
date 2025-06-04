import { z } from "zod";

export const updateAddressSchema = z.object({
  city: z.string().min(1, "Cidade é obrigatória"),
  district: z.string().min(1, "Bairro é obrigatório"),
  street: z.string().min(1, "Rua é obrigatório"),
  number: z.coerce
    .number({ required_error: "Número é obrigatório" })
    .int({ message: "Número deve ser inteiro" })
    .positive({ message: "Número deve ser maior que 0" }),
  cep: z.coerce
    .number({ required_error: "CEP é obrigatório" })
    .int({ message: "Número deve ser inteiro" })
    .positive({ message: "Número deve ser maior que 0" }),
  reference: z.string().optional(),
  type: z.string(),
});

export type UpdateAddressFormData = z.infer<typeof updateAddressSchema>;
