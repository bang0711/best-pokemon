import Image from "next/image";
import React from "react";
import dark from "../assets/types/dark.svg";
import bug from "../assets/types/bug.png";
import dragon from "../assets/types/dragon.png";
import electric from "../assets/types/electric.svg";
import fairy from "../assets/types/fairy.svg";
import fighting from "../assets/types/fighting.svg";
import fire from "../assets/types/fire.png";
import flying from "../assets/types/flying.png";
import ghost from "../assets/types/ghost.png";
import grass from "../assets/types/grass.png";
import ground from "../assets/types/ground.svg";
import ice from "../assets/types/ice.svg";
import normal from "../assets/types/normal.svg";
import poison from "../assets/types/poison.svg";
import psychic from "../assets/types/psychic.svg";
import rock from "../assets/types/rock.svg";
import steel from "../assets/types/steel.svg";
import water from "../assets/types/water.svg";
type Props = {
  name: string;
  id: number;
  image: string;
  types: string[];
  weight: number;
};

function PokeFeed({ name, id, image, types, weight }: Props) {
  return (
    <div
      className={`shadow-lg hover:scale-105 border-2 hover:shadow-xl transition-all duration-300 w-full h-[300px] overflow-hidden py-4 flex 
     px-6 glass flex-col items-center justify-center rounded-xl relative   ${
       types[0].replace(/[, ]+/g, "").toLowerCase() === "grass"
         ? "shadow-[#76cc54] hover:shadow-[#76cc54] bg-[#76cc54]/60 "
         : types[0].replace(/[, ]+/g, "").toLowerCase() === "fire"
         ? "hover:shadow-[#ff4422] bg-[#ff4422]/60 shadow-[#ff4422]"
         : types[0].replace(/[, ]+/g, "").toLowerCase() === "water"
         ? "hover:shadow-[#3299fe] bg-[#3299fe]/60 shadow-[#3299fe]"
         : types[0].replace(/[, ]+/g, "").toLowerCase() === "electric"
         ? "hover:shadow-[#ffcd32] bg-[#ffcd32]/60 shadow-[#ffcd32]"
         : types[0].replace(/[, ]+/g, "").toLowerCase() === "normal"
         ? "hover:shadow-[#aaaa99] bg-[#aaaa99]/60 shadow-[#aaaa99]"
         : types[0].replace(/[, ]+/g, "").toLowerCase() === "ice"
         ? "hover:shadow-[#67cdff] bg-[#67cdff]/60 shadow-[#67cdff]"
         : types[0].replace(/[, ]+/g, "").toLowerCase() === "fighting"
         ? "hover:shadow-[#ba5545] bg-[#ba5545]/60 shadow-[#ba5545]"
         : types[0].replace(/[, ]+/g, "").toLowerCase() === "poison"
         ? "hover:shadow-[#7f3f72] bg-[#7f3f72]/60 shadow-[#7f3f72]"
         : types[0].replace(/[, ]+/g, "").toLowerCase() === "ground"
         ? "hover:shadow-[#ddba54] bg-[#ddba54]/60 shadow-[#ddba54]"
         : types[0].replace(/[, ]+/g, "").toLowerCase() === "flying"
         ? "hover:shadow-[#8898fe] bg-[#8898fe]/60 shadow-[#8898fe]"
         : types[0].replace(/[, ]+/g, "").toLowerCase() === "psychic"
         ? "hover:shadow-[#ff5599] bg-[#ff5599]/60 shadow-[#ff5599]"
         : types[0].replace(/[, ]+/g, "").toLowerCase() === "bug"
         ? "hover:shadow-[#abba22] bg-[#abba22]/60 shadow-[#abba22]"
         : types[0].replace(/[, ]+/g, "").toLowerCase() === "rock"
         ? "hover:shadow-[#baab66] bg-[#baab66]/60 shadow-[#baab66]"
         : types[0].replace(/[, ]+/g, "").toLowerCase() === "ghost"
         ? "hover:shadow-[#6667ba] bg-[#6667ba]/60 shadow-[#6667ba]"
         : types[0].replace(/[, ]+/g, "").toLowerCase() === "dragon"
         ? "hover:shadow-[#7667EE] bg-[#7667EE]/60 shadow-[#7667EE]"
         : types[0].replace(/[, ]+/g, "").toLowerCase() === "dark"
         ? "hover:shadow-[#765545] bg-[#765545]/60 shadow-[#765545]"
         : types[0].replace(/[, ]+/g, "").toLowerCase() === "steel"
         ? "hover:shadow-[#ababbb] bg-[#ababbb]/60 shadow-[#ababbb]"
         : "hover:shadow-[#ef99ef] bg-[#ef99ef]/60 shadow-[#ef99ef]"
     } `}
    >
      <div className="absolute top-2 left-2 text-white text-sm font-semibold">
        {id}
      </div>
      <Image
        src={image}
        alt={name}
        width={150}
        height={150}
        loading="lazy"
        className="pokemonShadow h-[120px] w-[100px]"
      />
      <div className="flex w-full flex-col items-center justify-center">
        <h1
          className={`text-md text-center flex items-center justify-center font-bold uppercase mt-2 max-w-[150px] ${
            types[0].replace(/[, ]+/g, "").toLowerCase() === "grass"
              ? "text-[#76cc54]"
              : types[0].replace(/[, ]+/g, "").toLowerCase() === "fire"
              ? "text-[#ff4422]"
              : types[0].replace(/[, ]+/g, "").toLowerCase() === "water"
              ? "text-[#3299fe]"
              : types[0].replace(/[, ]+/g, "").toLowerCase() === "electric"
              ? "text-[#ffcd32]"
              : types[0].replace(/[, ]+/g, "").toLowerCase() === "normal"
              ? "text-[#aaaa99]"
              : types[0].replace(/[, ]+/g, "").toLowerCase() === "ice"
              ? "text-[#67cdff]"
              : types[0].replace(/[, ]+/g, "").toLowerCase() === "fighting"
              ? "text-[#ba5545]"
              : types[0].replace(/[, ]+/g, "").toLowerCase() === "poison"
              ? "text-[#7f3f72]"
              : types[0].replace(/[, ]+/g, "").toLowerCase() === "ground"
              ? "text-[#ddba54]"
              : types[0].replace(/[, ]+/g, "").toLowerCase() === "flying"
              ? "text-[#8898fe]"
              : types[0].replace(/[, ]+/g, "").toLowerCase() === "psychic"
              ? "text-[#ff5599]"
              : types[0].replace(/[, ]+/g, "").toLowerCase() === "bug"
              ? "text-[#abba22]"
              : types[0].replace(/[, ]+/g, "").toLowerCase() === "rock"
              ? "text-[#baab66]"
              : types[0].replace(/[, ]+/g, "").toLowerCase() === "ghost"
              ? "text-[#6667ba]"
              : types[0].replace(/[, ]+/g, "").toLowerCase() === "dragon"
              ? "text-[#765545]"
              : types[0].replace(/[, ]+/g, "").toLowerCase() === "dark"
              ? "text-[#765545]"
              : types[0].replace(/[, ]+/g, "").toLowerCase() === "steel"
              ? "text-[#ababbb]"
              : "text-[#ef99ef]"
          }`}
        >
          {name}
        </h1>
        <p className="text-white font-semibold text-md">
          Weight: {weight / 10} kg
        </p>
        <p className="flex gap-3 justify-between items-center my-2">
          {types.map((type) => (
            <span
              key={type}
              className={`${
                types[0].replace(/[, ]+/g, "").toLowerCase() === "fire"
                  ? "text-red-500"
                  : "text-black"
              }`}
            >
              {type.replace(/[, ]+/g, "").toLowerCase() === "grass" ? (
                <Image width={45} height={45} src={grass} alt="grass" />
              ) : type.replace(/[, ]+/g, "").toLowerCase() === "fire" ? (
                <Image width={45} height={45} src={fire} alt="fire" />
              ) : type.replace(/[, ]+/g, "").toLowerCase() === "water" ? (
                <Image width={45} height={45} src={water} alt="water" />
              ) : type.replace(/[, ]+/g, "").toLowerCase() === "electric" ? (
                <Image width={45} height={45} src={electric} alt="electric" />
              ) : type.replace(/[, ]+/g, "").toLowerCase() === "normal" ? (
                <Image width={45} height={45} src={normal} alt="normal" />
              ) : type.replace(/[, ]+/g, "").toLowerCase() === "ice" ? (
                <Image width={45} height={45} src={ice} alt="ice" />
              ) : type.replace(/[, ]+/g, "").toLowerCase() === "fighting" ? (
                <Image width={45} height={45} src={fighting} alt="fighting" />
              ) : type.replace(/[, ]+/g, "").toLowerCase() === "poison" ? (
                <Image width={45} height={45} src={poison} alt="poison" />
              ) : type.replace(/[, ]+/g, "").toLowerCase() === "ground" ? (
                <Image width={45} height={45} src={ground} alt="ground" />
              ) : type.replace(/[, ]+/g, "").toLowerCase() === "flying" ? (
                <Image width={45} height={45} src={flying} alt="flying" />
              ) : type.replace(/[, ]+/g, "").toLowerCase() === "psychic" ? (
                <Image width={45} height={45} src={psychic} alt="psychic" />
              ) : type.replace(/[, ]+/g, "").toLowerCase() === "bug" ? (
                <Image width={45} height={45} src={bug} alt="bug" />
              ) : type.replace(/[, ]+/g, "").toLowerCase() === "rock" ? (
                <Image width={45} height={45} src={rock} alt="rock" />
              ) : type.replace(/[, ]+/g, "").toLowerCase() === "ghost" ? (
                <Image width={45} height={45} src={ghost} alt="ghost" />
              ) : type.replace(/[, ]+/g, "").toLowerCase() === "dragon" ? (
                <Image width={45} height={45} src={dragon} alt="dragon" />
              ) : type.replace(/[, ]+/g, "").toLowerCase() === "dark" ? (
                <Image width={45} height={45} src={dark} alt="dark" />
              ) : type.replace(/[, ]+/g, "").toLowerCase() === "steel" ? (
                <Image width={45} height={45} src={steel} alt="steel" />
              ) : (
                <Image width={45} height={45} src={fairy} alt="fairy" />
              )}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
export default PokeFeed;
