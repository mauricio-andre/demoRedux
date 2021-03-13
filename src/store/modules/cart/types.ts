export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
}

export interface ICartState {
  items: ICartItem[];
  failedStockCheck: number[];
}
