export interface IOrder {
  title: string;
  price: number;
  image: string;
}

export interface IOrders {
  id: string,
  title: string;
  price: number;
  image: string;
}

export interface IOrderAPI {
  [id: string]: IOrders;
}

export interface IDishMutation {
  title: string;
  price: number;
  image: string;
}

