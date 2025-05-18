export type CreateUserParams = {
  sessionId: string;
};

export type CreateAddressParams = {
  sessionId: string;
  city: string;
  district: string;
  street: string;
  number: number;
  cep: number;
  latitude: number;
  longitude: number;
  complement?: string;
};

export type FindUserBySessionIdParams = {
  sessionId: string;
};

export type findAddressParams = {
  sessionId: string;
};
