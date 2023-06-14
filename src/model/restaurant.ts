export type Restaurant = {
  name : string;
  category :string;
  address :number | string;
  menu :Menu[]
}

export type Menu = {
  id :number;
  list :string;
  price :number;
}