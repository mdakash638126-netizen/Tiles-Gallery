
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const TileDetails = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(
    "https://tiles-gallery-roan.vercel.app/data.json",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch tiles");
  }

  const data = await response.json();

  // Supports both array and { tiles: [...] } formats
  const tiles = Array.isArray(data) ? data : data.tiles || [];

  const tile = tiles.find(
    (t) => String(t.id) === String(id)
  );

  if (!tile) {
    notFound();
  }

  return (
    <div className="container-custom section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Tile Image */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <Image
            src={tile.image}
            alt={tile.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Tile Information */}
        <div>
          <p className="section-label">{tile.category}</p>

          <h1 className="text-4xl font-semibold mt-3">
            {tile.title}
          </h1>

          <p className="text-gray-500 mt-4">
            {tile.description}
          </p>

          <p className="mt-5">
            <strong>Creator:</strong> {tile.creator}
          </p>

          <p className="mt-3">
            <strong>Material:</strong> {tile.material}
          </p>

          <p className="mt-3">
            <strong>Dimensions:</strong> {tile.dimensions}
          </p>

          <h2 className="text-2xl font-bold mt-6">
            ${tile.price}
          </h2>

          <div className="flex flex-wrap gap-2 mt-5">
            {tile.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 px-3 py-2 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

const Page = ({ params }) => {
  return (
    <Suspense
      fallback={
        <div className="container-custom section-padding">
          <p>Loading tile details...</p>
        </div>
      }
    >
      <TileDetails params={params} />
    </Suspense>
  );
};

export default Page;
