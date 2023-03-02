export type Product = {
  id: string;
  description: string;
  image: string;
  price: number;
};

export type ProductCart = Product & {
  quantity: number;
};
