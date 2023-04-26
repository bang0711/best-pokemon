"use client";
import Link from "next/link";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Input from "./Input";
type Props = {};

function Navbar({}: Props) {
  const pathname = usePathname();
  return (
    <div className="sticky justify-between py-2 px-3 top-0 z-50 w-full bg-gray-400 flex gap-3 items-center">
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href={"/"} className="flex items-center justify-center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10"
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          <p className="hidden sm:inline-flex text-white text-xl font-bold">
            Home
          </p>
        </Link>
        <Input />
      </div>

      <div className="flex items-center justify-center gap-3">
        <Link href={"/legendary"} className="">
          <div
            className={`bg-amber-500 px-3 py-2 rounded-lg text-white w-fit transition-all duration-300 legendary-button ${
              pathname.replace("/", "") === "legendary"
                ? "active-legendary-button"
                : ""
            }`}
          >
            Legendary
          </div>
        </Link>
        <Link href={"/mythical"} className="">
          <div
            className={`bg-pink-500 px-3 py-2 rounded-lg text-white w-fit transition-all duration-300 mythical-button ${
              pathname.replace("/", "") === "mythical"
                ? "active-mythical-button"
                : ""
            }`}
          >
            Mythical
          </div>
        </Link>
        <Link href={"/baby"} className="">
          <div
            className={`bg-red-500 px-3 py-2 rounded-lg text-white w-fit transition-all duration-300 baby-button ${
              pathname.replace("/", "") === "baby" ? "active-baby-button" : ""
            }`}
          >
            Baby
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
