"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useState } from "react";
type Props = {};

function Lists({}: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const newPathname = pathname.replace("/types/", "");
  const lists = [
    { title: "Normal", id: "normal" },
    { title: "Fire", id: "fire" },
    { title: "Electric", id: "electric" },
    { title: "Ice", id: "ice" },
    { title: "Fighting", id: "fighting" },
    { title: "Poison", id: "poison" },
    { title: "Ground", id: "ground" },
    { title: "Flying", id: "flying" },
    { title: "Psychic", id: "psychic" },
    { title: "Bug", id: "bug" },
    { title: "Rock", id: "rock" },
    { title: "Ghost", id: "ghost" },
    { title: "Dragon", id: "dragon" },
    { title: "Dark", id: "dark" },
    { title: "Steel", id: "steel" },
    { title: "Fairy", id: "fairy" },
    { title: "Grass", id: "grass" },
  ];
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex gap-4 justify-center items-center py-4">
        {lists.map((list) => (
          <Link
            href={`/types/${list.title.toLowerCase()}`}
            key={list.id}
            className="relative"
          >
            <h1
              className={`text-lg font-semibold hidden lg:inline-block ${
                list.id !== newPathname && list.id === "grass"
                  ? "text-[#76cc54]"
                  : list.id !== newPathname && list.id === "fire"
                  ? "text-[#ff4422]"
                  : list.id !== newPathname && list.id === "water"
                  ? "text-[#3299fe]"
                  : list.id !== newPathname && list.id === "electric"
                  ? "text-[#ffcd32]"
                  : list.id !== newPathname && list.id === "normal"
                  ? "text-[#aaaa99]"
                  : list.id !== newPathname && list.id === "ice"
                  ? "text-[#67cdff]"
                  : list.id !== newPathname && list.id === "fighting"
                  ? "text-[#ba5545]"
                  : list.id !== newPathname && list.id === "poison"
                  ? "text-[#7f3f72]"
                  : list.id !== newPathname && list.id === "ground"
                  ? "text-[#ddba54]"
                  : list.id !== newPathname && list.id === "flying"
                  ? "text-[#8898fe]"
                  : list.id !== newPathname && list.id === "psychic"
                  ? "text-[#ff5599]"
                  : list.id !== newPathname && list.id === "bug"
                  ? "text-[#abba22]"
                  : list.id !== newPathname && list.id === "rock"
                  ? "text-[#baab66]"
                  : list.id !== newPathname && list.id === "ghost"
                  ? "text-[#6667ba]"
                  : list.id !== newPathname && list.id === "dragon"
                  ? "text-[#7766ec]"
                  : list.id !== newPathname && list.id === "dark"
                  ? "text-[#765545]"
                  : list.id !== newPathname && list.id === "steel"
                  ? "text-[#ababbb]"
                  : list.id !== newPathname && list.id === "fairy"
                  ? "text-[#ef99ef]"
                  : "text-white"
              }
              ${
                list.id === newPathname && list.id === "grass"
                  ? "bg-[#76cc54]/50 px-6 py-3 rounded-lg text-xl shadow-md shadow-[#76cc54]"
                  : list.id === newPathname && list.id === "fire"
                  ? "bg-[#ff4422]/50 px-6 py-3 rounded-lg text-xl shadow-md shadow-[#ff4422]"
                  : list.id === newPathname && list.id === "water"
                  ? "bg-[#3299fe]/50 px-6 py-3 rounded-lg text-xl shadow-md shadow-[#3299fe]"
                  : list.id === newPathname && list.id === "electric"
                  ? "bg-[#ffcd32]/50 px-6 py-3 rounded-lg text-xl shadow-md shadow-[#ffcd32]"
                  : list.id === newPathname && list.id === "normal"
                  ? "bg-[#aaaa99]/50 px-6 py-3 rounded-lg text-xl shadow-md shadow-[#aaaa99]"
                  : list.id === newPathname && list.id === "ice"
                  ? "bg-[#67cdff]/50 px-6 py-3 rounded-lg text-xl shadow-md shadow-[#67cdff]"
                  : list.id === newPathname && list.id === "fighting"
                  ? "bg-[#ba5545]/50 px-6 py-3 rounded-lg text-xl shadow-md shadow-[#ba5545]"
                  : list.id === newPathname && list.id === "poison"
                  ? "bg-[#7f3f72]/50 px-6 py-3 rounded-lg text-xl shadow-md shadow-[#7f3f72]"
                  : list.id === newPathname && list.id === "ground"
                  ? "bg-[#ddba54]/50 px-6 py-3 rounded-lg text-xl shadow-md shadow-[#ddba54]"
                  : list.id === newPathname && list.id === "flying"
                  ? "bg-[#8898fe]/50 px-6 py-3 rounded-lg text-xl shadow-md shadow-[#8898fe]"
                  : list.id === newPathname && list.id === "psychic"
                  ? "bg-[#ff5599]/50 px-6 py-3 rounded-lg text-xl shadow-md shadow-[#ff5599]"
                  : list.id === newPathname && list.id === "bug"
                  ? "bg-[#abba22]/50 px-6 py-3 rounded-lg text-xl shadow-md shadow-[#abba22]"
                  : list.id === newPathname && list.id === "rock"
                  ? "bg-[#baab66]/50 px-6 py-3 rounded-lg text-xl shadow-md shadow-[#baab66]"
                  : list.id === newPathname && list.id === "ghost"
                  ? "bg-[#6667ba]/50 px-6 py-3 rounded-lg text-xl shadow-md shadow-[#6667ba]"
                  : list.id === newPathname && list.id === "dragon"
                  ? "bg-[#7766ec]/50 px-6 py-3 rounded-lg text-xl shadow-md shadow-[#7766ec]"
                  : list.id === newPathname && list.id === "dark"
                  ? "bg-[#765545]/50 px-6 py-3 rounded-lg text-xl shadow-md shadow-[#765545]"
                  : list.id === newPathname && list.id === "steel"
                  ? "bg-[#ababbb]/50 px-6 py-3 rounded-lg text-xl shadow-md shadow-[#ababbb]"
                  : list.id === newPathname && list.id === "fairy"
                  ? "bg-[#ef99ef]/50 px-6 py-3 rounded-lg text-xl shadow-md shadow-[#ef99ef]"
                  : ""
              }
              `}
            >
              {list.title}
            </h1>
          </Link>
        ))}
      </div>
      <div className="lg:hidden flex">
        {show ? (
          <div className=" fixed px-5 py-4 z-50 top-10 right-2 w-fit rounded-xl bg-gradient-to-br from-black to-gray-300">
            <div className="flex justify-end ">
              <svg
                onClick={() => setShow(false)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            <div className="flex gap-4 flex-wrap max-w-xs">
              {lists.map((list) => (
                <Link
                  href={`/types/${list.title.toLowerCase()}`}
                  key={list.id}
                  className="relative"
                >
                  <h1
                    className={`text-lg font-semibold lg:inline-block ${
                      list.id !== newPathname && list.id === "grass"
                        ? "text-[#76cc54]"
                        : list.id !== newPathname && list.id === "fire"
                        ? "text-[#ff4422]"
                        : list.id !== newPathname && list.id === "water"
                        ? "text-[#3299fe]"
                        : list.id !== newPathname && list.id === "electric"
                        ? "text-[#ffcd32]"
                        : list.id !== newPathname && list.id === "normal"
                        ? "text-[#aaaa99]"
                        : list.id !== newPathname && list.id === "ice"
                        ? "text-[#67cdff]"
                        : list.id !== newPathname && list.id === "fighting"
                        ? "text-[#ba5545]"
                        : list.id !== newPathname && list.id === "poison"
                        ? "text-[#7f3f72]"
                        : list.id !== newPathname && list.id === "ground"
                        ? "text-[#ddba54]"
                        : list.id !== newPathname && list.id === "flying"
                        ? "text-[#8898fe]"
                        : list.id !== newPathname && list.id === "psychic"
                        ? "text-[#ff5599]"
                        : list.id !== newPathname && list.id === "bug"
                        ? "text-[#abba22]"
                        : list.id !== newPathname && list.id === "rock"
                        ? "text-[#baab66]"
                        : list.id !== newPathname && list.id === "ghost"
                        ? "text-[#6667ba]"
                        : list.id !== newPathname && list.id === "dragon"
                        ? "text-[#7766ec]"
                        : list.id !== newPathname && list.id === "dark"
                        ? "text-[#765545]"
                        : list.id !== newPathname && list.id === "steel"
                        ? "text-[#ababbb]"
                        : list.id !== newPathname && list.id === "fairy"
                        ? "text-[#ef99ef]"
                        : "text-white"
                    }
                   ${
                     list.id === newPathname && list.id === "grass"
                       ? "bg-[#76cc54]/50 rounded-lg text-xl shadow-md shadow-[#76cc54] px-3 py-1"
                       : list.id === newPathname && list.id === "fire"
                       ? "bg-[#ff4422]/50 rounded-lg text-xl shadow-md shadow-[#ff4422] px-3 py-1"
                       : list.id === newPathname && list.id === "water"
                       ? "bg-[#3299fe]/50 rounded-lg text-xl shadow-md shadow-[#3299fe] px-3 py-1"
                       : list.id === newPathname && list.id === "electric"
                       ? "bg-[#ffcd32]/50 rounded-lg text-xl shadow-md shadow-[#ffcd32] px-3 py-1"
                       : list.id === newPathname && list.id === "normal"
                       ? "bg-[#aaaa99]/50 rounded-lg text-xl shadow-md shadow-[#aaaa99] px-3 py-1"
                       : list.id === newPathname && list.id === "ice"
                       ? "bg-[#67cdff]/50 rounded-lg text-xl shadow-md shadow-[#67cdff] px-3 py-1"
                       : list.id === newPathname && list.id === "fighting"
                       ? "bg-[#ba5545]/50 rounded-lg text-xl shadow-md shadow-[#ba5545] px-3 py-1"
                       : list.id === newPathname && list.id === "poison"
                       ? "bg-[#7f3f72]/50 rounded-lg text-xl shadow-md shadow-[#7f3f72] px-3 py-1"
                       : list.id === newPathname && list.id === "ground"
                       ? "bg-[#ddba54]/50 rounded-lg text-xl shadow-md shadow-[#ddba54] px-3 py-1"
                       : list.id === newPathname && list.id === "flying"
                       ? "bg-[#8898fe]/50 rounded-lg text-xl shadow-md shadow-[#8898fe] px-3 py-1"
                       : list.id === newPathname && list.id === "psychic"
                       ? "bg-[#ff5599]/50 rounded-lg text-xl shadow-md shadow-[#ff5599] px-3 py-1"
                       : list.id === newPathname && list.id === "bug"
                       ? "bg-[#abba22]/50 rounded-lg text-xl shadow-md shadow-[#abba22] px-3 py-1"
                       : list.id === newPathname && list.id === "rock"
                       ? "bg-[#baab66]/50 rounded-lg text-xl shadow-md shadow-[#baab66] px-3 py-1"
                       : list.id === newPathname && list.id === "ghost"
                       ? "bg-[#6667ba]/50 rounded-lg text-xl shadow-md shadow-[#6667ba] px-3 py-1"
                       : list.id === newPathname && list.id === "dragon"
                       ? "bg-[#7766ec]/50 rounded-lg text-xl shadow-md shadow-[#7766ec] px-3 py-1"
                       : list.id === newPathname && list.id === "dark"
                       ? "bg-[#765545]/50 rounded-lg text-xl shadow-md shadow-[#765545] px-3 py-1"
                       : list.id === newPathname && list.id === "steel"
                       ? "bg-[#ababbb]/50 rounded-lg text-xl shadow-md shadow-[#ababbb] px-3 py-1"
                       : list.id === newPathname && list.id === "fairy"
                       ? "bg-[#ef99ef]/50 rounded-lg text-xl shadow-md shadow-[#ef99ef] px-3 py-1"
                       : ""
                   }
                   `}
                  >
                    {list.title}
                  </h1>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div
            className="cursor-pointer fixed z-50 top-10 right-2 bg-white rounded-full"
            onClick={() => setShow(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        )}
      </div>
    </>
  );
}

export default Lists;
