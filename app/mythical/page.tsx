"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PokeFeed from "../components/PokeFeed";

type Props = {};
type Pokemon = {
  name: string;
  url: string;
  types: string[];
  weight: number;
  id: number;
  isMythical: boolean;
};
async function getPokemonData(url: string): Promise<Pokemon | null> {
  try {
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
    const isMythical = speciesData.is_mythical;
    const pokemon: Pokemon = {
      name: data.name,
      url: url,
      types: data.types.map((type: any) => type.type.name),
      weight: data.weight,
      id: data.id,
      isMythical: isMythical,
    };
    return pokemon;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getData() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10263");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const pokemonList: Pokemon[] = (
    await Promise.all(
      data.results.map(async (result: any) => await getPokemonData(result.url))
    )
  ).filter((pokemon) => pokemon !== null) as Pokemon[];

  const mythicalList = pokemonList.filter((pokemon) => pokemon.isMythical);
  return mythicalList;
}

function LegendaryPage({}: Props) {
  const [mythicalList, setMythical] = useState<Pokemon[]>([]);
  useEffect(() => {
    getData()
      .then((data) => setMythical(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="px-3 py-5 grid grid-cols-2 gap-x-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 ">
      {mythicalList.map((pokemon) => (
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
  );
}

export default LegendaryPage;
