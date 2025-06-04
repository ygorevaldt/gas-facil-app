export type CreateUserParams = {
  sessionId: string;
};

export type CreateAddressParams = {
  sessionId: string;
  userId: string;
  city?: string;
  district?: string;
  street?: string;
  number?: number;
  cep?: number;
  latitude?: number;
  longitude?: number;
  complement?: string;
  reference?: string;
  type?: string;
};

export type UpdateAddressParams = {
  sessionId: string;
  userId: string;
  city?: string;
  district?: string;
  street?: string;
  number?: number;
  cep?: number;
  reference?: string;
  type?: string;
};

export type FindUserBySessionIdParams = {
  sessionId: string;
};

export type findAddressParams = {
  sessionId: string;
};

export type fetchProductsResponse = {
  id: string;
  name: string;
  seller: {
    name: string;
    phone: string;
    opening_hours: {
      start: number;
      end: number;
    };
  };
  price: number;
  note: number;
  created_at: Date;
  updated_at: Date;
};
