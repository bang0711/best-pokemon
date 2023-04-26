"use client";
import React, { useState, useEffect } from "react";
import PokeFeed from "../../components/PokeFeed";
import Link from "next/link";

type Props = {
  params: {
    type: string;
  };
};
type Pokemon = {
  name: string;
  url: string;
  types: string[];
  weight: number;
  id: number;
  isLegendary: boolean;
  isMythical: boolean;
};

async function getPokemonData(url: string): Promise<Pokemon> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const speciesRes = await fetch(data.species.url);
  if (!speciesRes.ok) {
    throw new Error("Failed to fetch species data");
  }
  const speciesData = await speciesRes.json();
  const isLegendary = speciesData.is_legendary;
  const isMythical = speciesData.is_mythical;
  const pokemon: Pokemon = {
    name: data.name,
    url: url,
    types: data.types.map((type: any) => type.type.name),
    weight: data.weight,
    id: data.id,
    isLegendary: isLegendary,
    isMythical: isMythical,
  };
  return pokemon;
}
async function getData() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10263");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const pokemonList: Pokemon[] = await Promise.all(
    data.results.map(async (result: any) => await getPokemonData(result.url))
  );
  return pokemonList;
}
function TypePage({ params: { type } }: Props) {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [showLegendary, setShowLegendary] = useState(false);
  const [showMythical, setShowMythical] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setPokemonList(data);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col py-5 px-2 ">
      <div className="text-white font-semibold flex items-center justify-center space-x-8">
        <button
          className={`p-5 rounded-xl bg-yellow-500 w-fit mb-4 transition-all duration-300 
           ${showLegendary ? "active-legendary-button scale-105" : ""}`}
          onClick={() => {
            setShowLegendary(!showLegendary);
            setShowMythical(false);
          }}
        >
          Legendary
        </button>

        <button
          className={`p-5 rounded-xl bg-pink-500 w-fit mb-4 transition-all duration-300 
          ${showMythical ? "active-mythical-button scale-105" : ""}
          `}
          onClick={() => {
            setShowMythical(!showMythical);
            setShowLegendary(false);
          }}
        >
          Mythical
        </button>
      </div>

      <div className="grid grid-cols-2 gap-x-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
        {pokemonList
          .filter(
            (pokemon) =>
              pokemon.types[0].replace(/[, ]+/g, "").toLowerCase() ===
                type.toLowerCase() &&
              (showLegendary ? pokemon.isLegendary : true) &&
              (showMythical ? pokemon.isMythical : true)
          )
          .map((pokemon: Pokemon) => (
            <Link
              href={`/pokemon/${pokemon.id}`}
              key={pokemon.id}
              className="w-full max-w-[200px] mx-auto flex items-center justify-center"
            >
              {pokemon.id <= 10263 &&
              pokemon.id !== 10145 &&
              pokemon.id !== 10143 ? (
                <PokeFeed
                  name={pokemon.name}
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                  weight={pokemon.weight}
                  types={pokemon.types.map((type, index) =>
                    index === pokemon.types!.length - 1 ? type : `${type}, `
                  )}
                  id={pokemon.id}
                />
              ) : pokemon.id === 10145 ? (
                <PokeFeed
                  name={pokemon.name}
                  image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10145.png"
                  weight={pokemon.weight}
                  types={pokemon.types.map((type, index) =>
                    index === pokemon.types!.length - 1 ? type : `${type}, `
                  )}
                  id={pokemon.id}
                />
              ) : pokemon.id === 10143 ? (
                <PokeFeed
                  name={pokemon.name}
                  image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10143.png"
                  weight={pokemon.weight}
                  types={pokemon.types.map((type, index) =>
                    index === pokemon.types!.length - 1 ? type : `${type}, `
                  )}
                  id={pokemon.id}
                />
              ) : pokemon.id === 10264 ? (
                <PokeFeed
                  name={pokemon.name}
                  image="https://imgs.search.brave.com/FMgEp4EhkqYm49vQnbq-L4UfXWzCPquNH759bVgcJSs/rs:fit:329:350:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudHZ0cm9wZXMu/b3JnL3Btd2lraS9w/dWIvaW1hZ2VzL2tv/cmFpZG9uLnBuZw"
                  weight={pokemon.weight}
                  types={pokemon.types.map((type, index) =>
                    index === pokemon.types!.length - 1 ? type : `${type}, `
                  )}
                  id={pokemon.id}
                />
              ) : pokemon.id === 10265 ? (
                <PokeFeed
                  name={pokemon.name}
                  image="https://imgs.search.brave.com/FMgEp4EhkqYm49vQnbq-L4UfXWzCPquNH759bVgcJSs/rs:fit:329:350:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudHZ0cm9wZXMu/b3JnL3Btd2lraS9w/dWIvaW1hZ2VzL2tv/cmFpZG9uLnBuZw"
                  weight={pokemon.weight}
                  types={pokemon.types.map((type, index) =>
                    index === pokemon.types!.length - 1 ? type : `${type}, `
                  )}
                  id={pokemon.id}
                />
              ) : pokemon.id === 10266 ? (
                <PokeFeed
                  name={pokemon.name}
                  image="https://imgs.search.brave.com/FMgEp4EhkqYm49vQnbq-L4UfXWzCPquNH759bVgcJSs/rs:fit:329:350:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudHZ0cm9wZXMu/b3JnL3Btd2lraS9w/dWIvaW1hZ2VzL2tv/cmFpZG9uLnBuZw"
                  weight={pokemon.weight}
                  types={pokemon.types.map((type, index) =>
                    index === pokemon.types!.length - 1 ? type : `${type}, `
                  )}
                  id={pokemon.id}
                />
              ) : pokemon.id === 10267 ? (
                <PokeFeed
                  name={pokemon.name}
                  image="https://imgs.search.brave.com/FMgEp4EhkqYm49vQnbq-L4UfXWzCPquNH759bVgcJSs/rs:fit:329:350:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudHZ0cm9wZXMu/b3JnL3Btd2lraS9w/dWIvaW1hZ2VzL2tv/cmFpZG9uLnBuZw"
                  weight={pokemon.weight}
                  types={pokemon.types.map((type, index) =>
                    index === pokemon.types!.length - 1 ? type : `${type}, `
                  )}
                  id={pokemon.id}
                />
              ) : pokemon.id === 10268 ? (
                <PokeFeed
                  name={pokemon.name}
                  image="https://imgs.search.brave.com/QduXdTA1ZGY0p39BtFL81B5ZIFFLsYkPila9g4rhCLo/rs:fit:286:450:1/g:ce/aHR0cHM6Ly93d3cu/c2VyZWJpaS5uZXQv/c2NhcmxldHZpb2xl/dC9taXJhaWRvbi5w/bmc"
                  weight={pokemon.weight}
                  types={pokemon.types.map((type, index) =>
                    index === pokemon.types!.length - 1 ? type : `${type}, `
                  )}
                  id={pokemon.id}
                />
              ) : pokemon.id === 10269 ? (
                <PokeFeed
                  name={pokemon.name}
                  image="https://imgs.search.brave.com/QduXdTA1ZGY0p39BtFL81B5ZIFFLsYkPila9g4rhCLo/rs:fit:286:450:1/g:ce/aHR0cHM6Ly93d3cu/c2VyZWJpaS5uZXQv/c2NhcmxldHZpb2xl/dC9taXJhaWRvbi5w/bmc"
                  weight={pokemon.weight}
                  types={pokemon.types.map((type, index) =>
                    index === pokemon.types!.length - 1 ? type : `${type}, `
                  )}
                  id={pokemon.id}
                />
              ) : pokemon.id === 10270 ? (
                <PokeFeed
                  name={pokemon.name}
                  image="https://imgs.search.brave.com/QduXdTA1ZGY0p39BtFL81B5ZIFFLsYkPila9g4rhCLo/rs:fit:286:450:1/g:ce/aHR0cHM6Ly93d3cu/c2VyZWJpaS5uZXQv/c2NhcmxldHZpb2xl/dC9taXJhaWRvbi5w/bmc"
                  weight={pokemon.weight}
                  types={pokemon.types.map((type, index) =>
                    index === pokemon.types!.length - 1 ? type : `${type}, `
                  )}
                  id={pokemon.id}
                />
              ) : pokemon.id === 10271 ? (
                <PokeFeed
                  name={pokemon.name}
                  image="https://imgs.search.brave.com/QduXdTA1ZGY0p39BtFL81B5ZIFFLsYkPila9g4rhCLo/rs:fit:286:450:1/g:ce/aHR0cHM6Ly93d3cu/c2VyZWJpaS5uZXQv/c2NhcmxldHZpb2xl/dC9taXJhaWRvbi5w/bmc"
                  weight={pokemon.weight}
                  types={pokemon.types.map((type, index) =>
                    index === pokemon.types!.length - 1 ? type : `${type}, `
                  )}
                  id={pokemon.id}
                />
              ) : (
                <PokeFeed
                  name={pokemon.name}
                  image="https://imgs.search.brave.com/QduXdTA1ZGY0p39BtFL81B5ZIFFLsYkPila9g4rhCLo/rs:fit:286:450:1/g:ce/aHR0cHM6Ly93d3cu/c2VyZWJpaS5uZXQv/c2NhcmxldHZpb2xl/dC9taXJhaWRvbi5w/bmc"
                  weight={pokemon.weight}
                  types={pokemon.types.map((type, index) =>
                    index === pokemon.types!.length - 1 ? type : `${type}  `
                  )}
                  id={pokemon.id}
                />
              )}
            </Link>
          ))}
      </div>
    </div>
  );
}

export default TypePage;
