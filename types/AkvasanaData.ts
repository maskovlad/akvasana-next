export type AkvasanaOrder = {
  app:string;
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
  cost1: number | null;
  delivery: string;
};

export type Accessories = {
  id: number;
  item: string;
  title: string;
  cost: number;
}[];
