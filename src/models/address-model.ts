export interface AddressModel {
  id: string;
  sessionId: string;
  city: string;
  district: string;
  street: string;
  number: number;
  complement: string;
  cep: number;
  latitude: number;
  longitude: number;
  createdAt: Date;
  updatedAt: Date;
}
