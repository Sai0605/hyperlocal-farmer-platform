"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path;

  return (
    <nav className="bg-white shadow-sm px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-green-700"
        >
          FarmDirect
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-3">
          <NavLink href="/marketplace" active={isActive("/marketplace")}>
            Marketplace
          </NavLink>

          <NavLink href="/orders" active={isActive("/orders")}>
            Orders
          </NavLink>

          <NavLink
            href="/dashboard/farmer"
            active={isActive("/dashboard/farmer")}
          >
            Farmer
          </NavLink>

          <NavLink href="/login" active={isActive("/login")}>
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-full text-sm font-medium transition
        ${
          active
            ? "bg-green-600 text-white"
            : "text-gray-700 hover:bg-green-100"
        }`}
    >
      {children}
    </Link>
  );
}
