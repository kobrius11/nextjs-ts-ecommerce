import Link from "next/link";
import { ReactNode } from "react";

interface navbarProps {
  children: ReactNode;
}

export default function Navbar({ children }: navbarProps) {
  return (
    <nav className="flex justify-between bg-transparent text-slate-950 dark:text-slate-300 w-screen">
      {children}
    </nav>
  );
}
