import { ProductModel } from "@/models/product-model";
import { createContext, ReactNode, useState } from "react";

type ProductContextType = {
  selectedProduct: ProductModel | null;
  setSelectedProduct: (product: ProductModel) => void;
};

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [selectedProduct, setSelectedProduct] = useState<ProductModel | null>(null);

  return (
    <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
