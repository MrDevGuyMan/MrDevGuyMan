export type NavItem = {
  href: string;
  label: string;
};

export const primaryNavigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
  { href: "/tools", label: "Tools" },
  { href: "/experiments", label: "Experiments" },
  { href: "/about", label: "About" },
  { href: "/surprise-me", label: "Surprise Me" },
];

