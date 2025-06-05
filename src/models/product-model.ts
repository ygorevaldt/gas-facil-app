export interface ProductModel {
  id: string;
  name: string;
  seller: Seller;
  price: number;
  note: number;
  sum_note: number;
  amount_notes: number;
  created_at: Date;
  updated_at: Date;
}

export type Seller = {
  name: string;
  phone: string;
  opening_hours: OpeningHours;
};

export type OpeningHours = {
  start: number;
  end: number;
};
