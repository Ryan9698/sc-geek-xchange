"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/nav";

export default function Nav() {
  const pathname = usePathname();

  return (
    <ul className="flex gap-6">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`text-sm transition ${
                isActive
                  ? "text-white font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

// FOR LINKS AND HEADINGS I NEED TO USE A COMBINATION OF ORBITRON AND INTER/ROBOTO
