import { inventoryItems } from "@/data/inventory";
import InventoryCard from "@/components/ui/InventoryCard";

export default function Inventory() {
  return (
    <main className="p-4 max-w-4xl">
      <section>
        <h1>Inventory</h1>
        <h2>
          Here at the XChange we offer an array of different collectibles for
          both the budding hobbyish and the serious collector. Here are some of
          the offerings that we have avaiable:
        </h2>
      </section>
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {inventoryItems.map((item) => (
          <InventoryCard key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}
