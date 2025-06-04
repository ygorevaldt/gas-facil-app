export interface ProductModel {
  id: string;
  name: string;
  seller: Seller;
  price: number;
  note: number;
  sumNote: number;
  amountNotes: number;
  createdAt: Date;
  updatedAt: Date;
}

export type Seller = {
  name: string;
  phone: string;
  openingHours: OpeningHours;
};

export type OpeningHours = {
  start: number;
  end: number;
};
