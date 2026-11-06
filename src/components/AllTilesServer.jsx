
import { connection } from "next/server";
import AllTilesClient from "@/components/AllTilesClient";

const AllTilesServer = async () => {
  await connection();

  const baseURL =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const response = await fetch(`${baseURL}/data.json`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch tiles");
  }

  const data = await response.json();
  const tiles = data.tiles || [];

  return <AllTilesClient tiles={tiles} />;
};

export default AllTilesServer;
