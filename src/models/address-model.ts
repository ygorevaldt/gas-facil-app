export interface AddressModel {
  id: string;
  city: string;
  district: string;
  street: string;
  number: number;
  complement: string;
  reference: string;
  type: string;
  cep: number;
  latitude: number;
  longitude: number;
  createdAt: Date;
  updatedAt: Date;
}
