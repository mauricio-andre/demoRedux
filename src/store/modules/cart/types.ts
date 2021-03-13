export interface IProduct {
  id: number;
  title: string;
  prive: number;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
}
