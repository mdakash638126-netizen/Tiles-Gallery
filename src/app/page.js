
import AllTiles from "@/components/AllTrige";
import Banner from "@/components/Banner";
import { Suspense } from "react";
export default function Home() {
  return (
   <div>
      <Banner />
    <Suspense
  fallback={
    <div className="text-center py-20">
      Loading tiles...
    </div>
  }
>
  <AllTiles />
</Suspense>
    

   </div>
  );
}
