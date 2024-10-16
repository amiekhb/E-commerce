export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  size: string;
  images: [string];
  isNew: boolean;
  quantity: number;
  discount: number;
  category: Object;
}

export interface ICategory {
  name: string;
  description: string;
}

export interface ICart {
  user: string;
  products: [{ product: string; quantity: Number }];
  totalAmount: Number;
}
export type Cart = {
  product: IProduct;
  quantity: number;
}[];
