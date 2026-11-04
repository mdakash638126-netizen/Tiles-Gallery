
import Link from "next/link";
import { ArrowRight, MoveUpRight } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative min-h-[620px] lg:min-h-[700px] flex items-center overflow-hidden bg-[#e9e5da]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6585756/pexels-photo-6585756.jpeg?auto=compress&cs=tinysrgb&w=2000')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e211a]/80 via-[#1e211a]/45 to-transparent" />

      {/* Content */}
      <div className="container-custom relative z-10 py-24">
        <div className="max-w-[720px]">

          <div className="flex items-center gap-3 mb-7">
            <span className="w-10 h-[1px] bg-[#c5c9a9]" />
            <span className="text-xs tracking-[4px] uppercase text-[#d5d8c0]">
              Discover the Art of Surfaces
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[78px] leading-[1.08] font-medium text-white tracking-[-3px]">
            Discover Your
            <br />
            Perfect
            <span className="text-[#c5c9a9] italic"> Aesthetic.</span>
          </h1>

          <p className="mt-7 max-w-lg text-base sm:text-lg leading-8 text-gray-200">
            Explore an exclusive collection of timeless tiles,
            natural textures, and elegant surfaces designed
            to transform your everyday spaces.
          </p>

          <div className="flex flex-wrap items-center gap-5 mt-10">
            <Link href="/all-tiles" className="primary-btn">
              Browse Now
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/all-tiles"
              className="flex items-center gap-2 text-sm text-white hover:text-[#c5c9a9] transition"
            >
              Explore Collection
              <MoveUpRight size={16} />
            </Link>
          </div>

          <div className="flex gap-10 mt-16 pt-7 border-t border-white/30 max-w-md">
            <div>
              <h3 className="text-3xl text-white font-semibold">100+</h3>
              <p className="text-xs text-gray-300 mt-2">Tile Inspirations</p>
            </div>

            <div>
              <h3 className="text-3xl text-white font-semibold">05+</h3>
              <p className="text-xs text-gray-300 mt-2">Design Categories</p>
            </div>

            <div>
              <h3 className="text-3xl text-white font-semibold">2026</h3>
              <p className="text-xs text-gray-300 mt-2">Design Collection</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Label */}
      <div className="absolute bottom-8 right-8 hidden lg:block text-xs tracking-[3px] text-white/70 uppercase">
        Architecture · Texture · Design
      </div>

    </section>
  );
};

export default Banner;
