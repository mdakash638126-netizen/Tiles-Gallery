
import { connection } from "next/server";
import AllTilesClient from "@/components/AllTilesClient";

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

  return <AllTilesClient tiles={tiles} />;
};

export default AllTiles;
