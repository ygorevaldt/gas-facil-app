export type CreateClientParams = {
  sessionId: string;
};

export type CreateAddressParams = {
  sessionId: string;
  city: string;
  district: string;
  street: string;
  number: number;
  complement?: string;
  cep: number;
};
