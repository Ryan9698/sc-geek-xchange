import { inventoryItems } from "@/data/inventory";
import InventoryCard from "@/components/ui/InventoryCard";

export default function Inventory() {
  return (
    <main className="p-4 max-w-4xl">
      <header>
        <h1>Inventory</h1>
        <p>
          Here at the XChange we offer an array of collectibles for both casual
          fans and serious collectors.
        </p>
      </header>

      <section
        aria-labelledby="inventory-items-heading"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
      >
        <h2 id="inventory-items-heading" className="sr-only">
          Available items
        </h2>
        {inventoryItems.map((item) => (
          <InventoryCard key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}
