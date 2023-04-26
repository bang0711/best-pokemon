"use client";
import PokeFeed from "@/app/components/PokeFeed";
import React, { useEffect, useState } from "react";

type Props = {
  params: {
    pokemonId: string;
  };
};

type Pokemon = {
  name: string;
  url: string;
  types: string[];
  weight: number;
  id: number;
  isLegendary?: boolean;
  isMythical?: boolean;
  isBaby?: boolean;
  species?: any;
};

async function getData(pokemonId: string): Promise<Pokemon> {
  const pokemonRes = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );
  const pokemonData = await pokemonRes.json();

  try {
    const speciesRes = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonData.name}`
    );
    const speciesData = await speciesRes.json();

    const isLegendary = speciesData.is_legendary;
    const isMythical = speciesData.is_mythical;
    const isBaby = speciesData.is_baby;
    return {
      name: pokemonData.name,
      url: pokemonData.url,
      types: pokemonData.types.map((type: any) => type.type.name),
      weight: pokemonData.weight,
      id: pokemonData.id,
      isLegendary: isLegendary || undefined,
      isMythical: isMythical || undefined,
      isBaby: isBaby || undefined,
      species: speciesData || undefined,
    };
  } catch (error) {
    console.error(error);
    return {
      name: pokemonData.name,
      url: pokemonData.url,
      types: pokemonData.types.map((type: any) => type.type.name),
      weight: pokemonData.weight,
      id: pokemonData.id,
      isLegendary: undefined,
      isMythical: undefined,
      isBaby: undefined,
      species: undefined,
    };
  }
}

function PokemonPage({ params: { pokemonId } }: Props) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    async function fetchData() {
      const result = await getData(pokemonId);
      setPokemon(result);
    }
    fetchData();
  }, [pokemonId]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  let status = pokemon.isLegendary
    ? "Legendary"
    : pokemon.isMythical
    ? "Mythical"
    : pokemon.isBaby
    ? "Baby"
    : "Normal";

  if (status === "Normal" && pokemon.species === undefined) {
    status = "Unknown";
  }

  return (
    <div className="text-white flex items-center justify-center flex-col">
      <div
        key={pokemon.id}
        className="w-full max-w-[200px] mx-auto flex items-center justify-center"
      >
        {pokemon.id <= 10263 && pokemon.id !== 10145 && pokemon.id !== 10143 ? (
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
      </div>
      <h1 className="flex text-center justify-center items-center mt-5 font-bold text-xl">
        {status === "baby" ? "Status: " : "Rarity: "}{" "}
        <p
          className={`px-2 py-3 text-3xl tracking-wider font-extrabold  ${
            status === "Legendary"
              ? "legendary-text "
              : status === "Mythical"
              ? "text-mythical"
              : " bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 text-transparent "
          }`}
        >
          {status}
        </p>
      </h1>
    </div>
  );
}

export default PokemonPage;
