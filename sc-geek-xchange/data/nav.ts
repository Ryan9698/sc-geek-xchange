export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Inventory", href: "/inventory" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Events", href: "/events" },
];
