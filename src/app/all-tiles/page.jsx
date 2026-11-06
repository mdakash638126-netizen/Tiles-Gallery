
import { Suspense } from "react";
import AllTilesServer from "@/components/AllTilesServer";

const AllTilesPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-lg font-medium">Loading tiles...</p>
        </div>
      }
    >
      <AllTilesServer />
    </Suspense>
  );
};

export default AllTilesPage;
