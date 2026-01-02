export type InventoryCategory =
  | "Star Wars"
  | "Marvel"
  | "DC"
  | "Toy"
  | "Model"
  | "Funko Pop"
  | "Plush"
  | "Other";

export type InventoryItem = {
  id: string;
  name: string;
  category: InventoryCategory;
  description: string;
  price: number;
  image: string;
};
