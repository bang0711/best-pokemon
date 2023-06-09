import { useRouter } from "next/navigation";
import React, { useState } from "react";
export default function SearchBar({}) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) {
      return;
    }
    if (
      (/^\d+$/.test(query) && parseInt(query) <= 1010) ||
      (/^\d+$/.test(query) && parseInt(query) >= 10010)
    ) {
      router.push(`/pokemon/${query}`);
    } else if (
      /^\d+$/.test(query) &&
      parseInt(query) > 1010 &&
      /^\d+$/.test(query) &&
      parseInt(query) < 10010
    ) {
      alert("Please enter id from 1 to 1010 or from 10010 to 10271 ");
    } else router.push(`/pokemon/${query.toLowerCase()}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center flex-col sm:flex-row gap-2 justify-center `}
    >
      <input
        placeholder="Enter ID or Name"
        type="text"
        id="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="py-2 flex-1 mx-2 px-1 rounded-xl shadow-md shadow-black focus:outline-none focus:shadow-lg focus:shadow-black transition-all duration-500 focus:scale-105"
      />
      <button
        disabled={!query}
        type="submit"
        className="flex items-center px-3 py-2 rounded-xl border-2 text-white font-bold text-lg shadow-btn disabled:cursor-not-allowed disabled:hover:scale-100 disabled:active:scale-100 disabled:hover:shadow-md disabled:hover:shadow-black disabled:grayscale"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        Search
      </button>
    </form>
  );
}
