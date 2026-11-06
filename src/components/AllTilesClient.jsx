
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const AllTilesClient = ({ tiles = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter tiles by title
  const filteredTiles = useMemo(() => {
    return tiles.filter((tile) =>
      tile.title?.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );
  }, [tiles, searchQuery]);

  return (
    <section className="section-padding">
      <div className="container-custom">

        {/* Page Heading */}
        <div className="text-center mb-10">
          <p className="section-label">Our Collection</p>

          <h1 className="section-title mt-4">
            Explore All Tiles
          </h1>

          <p className="text-gray-500 mt-4">
            Discover beautiful tiles for your perfect space.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
              ⌕
            </span>

            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tiles by title..."
              aria-label="Search tiles by title"
              className="w-full h-14 pl-14 pr-12 rounded-xl border border-gray-200 bg-white text-gray-800 shadow-sm outline-none transition focus:border-[#7b8060] focus:ring-2 focus:ring-[#7b8060]/20"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-800"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Tiles Count */}
        <div className="mb-8">
          <p className="text-sm text-gray-500">
            Showing {filteredTiles.length} of {tiles.length} tiles
          </p>
        </div>

        {/* Tiles Grid */}
        {filteredTiles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">

            {filteredTiles.map((tile) => (
              <div
                key={tile.id}
                className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
              >
                {/* Image */}
                <Link
                  href={`/tile/${tile.id}`}
                  className="block tile-image-wrapper h-64"
                >
                  <Image
                    src={tile.image}
                    alt={tile.title}
                    width={600}
                    height={450}
                    className="tile-image"
                  />
                </Link>

                {/* Content */}
                <div className="p-5">
                  <p className="text-xs uppercase tracking-widest text-[#7b8060]">
                    {tile.category}
                  </p>

                  <h2 className="text-lg font-semibold mt-2">
                    {tile.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-2">
                    {tile.description}
                  </p>

                  <div className="flex items-center justify-between mt-5">
                    <span className="font-semibold text-[#7b8060]">
                      ${tile.price}
                    </span>

                    <Link
                      href={`/tile/${tile.id}`}
                      className="text-sm font-semibold hover:text-[#7b8060]"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}

          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold">
              {searchQuery ? "No Tiles Found" : "No Tiles Available"}
            </h2>

            <p className="text-gray-500 mt-3">
              {searchQuery
                ? `No tiles found for "${searchQuery}". Try another title.`
                : "Please check back later."}
            </p>

            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="mt-5 rounded-lg bg-[#7b8060] px-6 py-2 text-white hover:bg-[#656b4e] transition"
              >
                Clear Search
              </button>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

export default AllTilesClient;
