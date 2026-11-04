import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[75vh] flex items-center justify-center px-5">
      <div className="text-center max-w-xl">

        <h1 className="text-9xl font-bold text-[#7b8060]">
          404
        </h1>

        <h2 className="text-3xl font-semibold mt-5">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-4">
          Sorry! The page you are looking for does not exist.
        </p>

        <div className="flex justify-center gap-4 mt-8">

          <Link href="/" className="primary-btn">
            Back to Home
          </Link>

          <Link href="/all-tiles" className="secondary-btn">
            Explore Tiles
          </Link>

        </div>
      </div>
    </section>
  );
}