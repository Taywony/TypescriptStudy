export type Restaurant = {
  name : string;
  category :string;
  address :number | string;
  menu :Menu[]
}

export type Menu = {
  id :number;
  name :string;
  price :number;
}