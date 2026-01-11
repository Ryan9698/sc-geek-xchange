import type { InventoryItem } from "@/types/inventory";
import Image from "next/image";

type InventoryCardProps = {
  item: InventoryItem;
};
export default function InventoryCard({ item }: InventoryCardProps) {
  return (
    <article className="flex flex-col min-w-0 items-center gap-6 border border-green-500/80 rounded-lg">
      <div className="aspect-square w-48 overflow-hidden mx-auto">
        <Image
          src={item.image}
          alt={item.name}
          width={150}
          height={150}
          className="object-cover mx-auto"
        />
      </div>
      <div className="bg-surface flex flex-col w-full">
        <h3 className="text-lg font-semibold text-center">{item.name}</h3>
        <p className="text-sm p-2 mx-auto text-center">{item.description}</p>
        <p className="font-bold text-end">${item.price}</p>
        <p className="text-xs italic">
          <span className="font-bold text-pretty">Category:</span>{" "}
          {item.category}
        </p>
      </div>
    </article>
  );
}
