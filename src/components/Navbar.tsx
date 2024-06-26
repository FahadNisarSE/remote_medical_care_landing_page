"use client";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useInViewState } from "@/lib/store";
import { usePathname } from "next/navigation";

const NavItems = [
  { name: "Home", url: "#home" },
  { name: "Service", url: "#service" },
  { name: "About", url: "#about" },
  { name: "Healthcare Triad", url: "#healthcare" },
  { name: "Contact", url: "#contact" },
];

export default function Navbar() {
  const value = useInViewState((state) => state.value);
  const path = usePathname();

  return (
    <nav className="fixed shadow-sm top-0 inset-x-0 bg-white z-50">
      <div className="flex items-center justify-between px-8 py-6 max-w-[1200px] mx-auto">
        <Link href="/" className="outline-transparent">
          <img
            src='remote_medical_care.svg'
            alt="Remote Medical Care"
            width={200}
            height={100}
            className="sm:w-[200px] h-auto w-48"
          />
        </Link>

        {path === "/" ? (
          <>
            <ul className="lg:flex hidden items-center gap-6">
              {NavItems.map((item) => (
                <li
                  key={item.name}
                  className={`relative hover:text-primary pb-1 after:scale-0 ${
                    value === item.url && "text-primary after:scale-100"
                  } after:transition-all after:duration-500 transition-all after:absolute after:w-full after:bottom-0 after:h-[2px] after:left-0 after:rounded after:bg-primary`}
                >
                  <Link href={item.url} className="font-medium tracking-wider">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <DropdownMenu>
              <DropdownMenuTrigger className="lg:hidden">
                <Menu className="w-8 h-8" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-4">
                {NavItems.map((item) => (
                  <Link
                    href={item.url}
                    key={item.name}
                    className="font-medium tracking-wider"
                  >
                    <DropdownMenuItem>{item.name}</DropdownMenuItem>
                  </Link>
                ))}
                <DropdownMenuItem></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <Link
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "place-items-center lg:grid hidden tracking-widest font-semibold",
              })
            )}
            href="/"
          >
            Home
          </Link>
        )}
      </div>
    </nav>
  );
}
