import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";

const AllTiles = async () => {
  // Wait for request time before fetching dynamic data
  await connection();

 const response = await fetch(
  `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/data.json`,
  {
    cache: "no-store",
  }
);

  if (!response.ok) {
    throw new Error("Failed to fetch tiles");
  }

  const data = await response.json();

  // Get tiles from JSON data
  const tiles = data.tiles || [];

  return (
    <section className="section-padding">
      <div className="container-custom">

        {/* Page Heading */}
        <div className="text-center mb-14">
          <p className="section-label">Our Collection</p>

          <h1 className="section-title mt-4">
            Explore All Tiles
          </h1>

          <p className="text-gray-500 mt-4">
            Discover beautiful tiles for your perfect space.
          </p>
        </div>

        {/* Tiles Count */}
        <div className="mb-8">
          <p className="text-sm text-gray-500">
            Showing {tiles.length} tiles
          </p>
        </div>

        {/* Tiles Grid */}
        {tiles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">

            {tiles.map((tile) => (
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
              No Tiles Found
            </h2>

            <p className="text-gray-500 mt-3">
              Please check back later.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default AllTiles;