import type { InventoryItem } from "@/types/inventory";

export const inventoryItems: InventoryItem[] = [
  {
    id: "vader-helmet",
    name: "Darth Vader Helmet",
    category: "Star Wars",
    description: "This is a Darth Vader helmet",
    price: 199.99,
    image: "/images/vader.jpg",
  },
  {
    id: "luke-helmet",
    name: "Luke Skywalker Helmet",
    category: "Star Wars",
    description: "This is a Luke Skywalker flight helmet",
    price: 119.99,
    image: "/images/vader.jpg",
  },
  {
    id: "solo-gun",
    name: "Han Solo Laser Pistol (Model)",
    category: "Star Wars",
    description: "What we have here is Han Solo's Laser Pistol",
    price: 64.99,
    image: "/images/vader.jpg",
  },
];
