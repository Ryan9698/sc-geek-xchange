import Image from "next/image";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import { inventoryItems } from "@/data/inventory";
import InventoryCard from "@/components/ui/InventoryCard";

export default function Home() {
  return (
    <div className="">
      <main>
        <InventoryCard item={inventoryItems[0]} />
        <Header />
        <Hero />
      </main>
    </div>
  );
}
