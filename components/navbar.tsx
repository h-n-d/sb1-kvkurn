"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Terminal } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 z-50 w-full backdrop-blur-sm bg-background/80 border-b"
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Terminal className="w-6 h-6" />
          <span className="font-bold text-xl">Bolt</span>
        </Link>

        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={cn(
                  "relative py-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-primary bottom-0"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}