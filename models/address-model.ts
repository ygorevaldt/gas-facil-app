export interface AddressModel {
  id: string;
  sessionId: string;
  city: string;
  district: string;
  street: string;
  number: number;
  complement: string;
  cep: number;
  createdAt: Date;
  updatedAt: Date;
}
