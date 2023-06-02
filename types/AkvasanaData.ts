export type AkvasanaOrder = {
  id: number | undefined;
  createdAt: string | undefined;
  app: string;
  regionName: string;
  address: string;
  phone: string;
  isClient: string;
  bottle: string;
  pomp: string;
  qty: number;
  total: number;
};

export type Region = {
  id: number;
  regionName: string;
  minQty: number;
  cost: number;
  cost1: number;
  delivery: string;
};

export type Accessory = {
  id: number;
  item: string;
  title: string;
  cost: number;
};

export type Accessories = Accessory[];

