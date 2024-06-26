"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-5 inset-x-0 max-w-2xl mx-auto z-50",
        className
    )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        </Link>
        <Link href={"/courses"}>
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">Guitar fundamentals</HoveredLink>
            <HoveredLink href="/courses">Piano for beginners</HoveredLink>
            <HoveredLink href="/courses">Drumming mastery</HoveredLink>
            <HoveredLink href="/courses">Vacal Basics</HoveredLink>
            <HoveredLink href="/courses">Music Production</HoveredLink>
          </div>
        </MenuItem>
        </Link>
        <Link href={"/products"}>
        <MenuItem setActive={setActive} active={active} item="Products"> 
        </MenuItem>
        </Link>
        <RegisterLink>
        <MenuItem setActive={setActive} active={active} 
        item="Login / Register">
        </MenuItem>  
        </RegisterLink>
      </Menu>
    </div>
  );
}

export default Navbar;
