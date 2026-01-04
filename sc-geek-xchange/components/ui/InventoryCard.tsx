import type { InventoryItem } from "@/types/inventory";
import Image from "next/image";

type InventoryCardProps = {
  item: InventoryItem;
};
export default function InventoryCard({ item }: InventoryCardProps) {
  return (
    <article className="flex flex-col md:flex-row items-center gap-6 border border-green-500 p-4 rounded">
      <Image
        src={item.image}
        alt={item.name}
        width={150}
        height={1500}
        className="w-full h-auto"
      />

      <div className="bg-surface flex flex-col border rounded p-2 ">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm">{item.description}</p>
        <p className="font-bold">{item.price}</p>
        <p className="text-xs">{item.category}</p>
      </div>
    </article>
  );
}
