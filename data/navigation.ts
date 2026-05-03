export type NavItem = {
  href: string;
  label: string;
};

export const primaryNavigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
  { href: "/tools", label: "Tools" },
  { href: "/about", label: "About" },
  { href: "/useful-tools", label: "Useful Tools" },
  { href: "/surprise-me", label: "Surprise Me" },
];
