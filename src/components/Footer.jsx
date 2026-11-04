import Link from "next/link";
import {
  Layers3,
  ArrowUpRight,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#22251e] text-white pt-16 pb-7">

      <div className="container-custom">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 bg-[#7b8060] flex items-center justify-center rounded-sm">
                <Layers3 size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  tileora.
                </h2>
                <p className="text-[9px] tracking-[3px] text-gray-400 uppercase">
                  Surface Gallery
                </p>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-7 mt-6 max-w-xs">
              Discover beautiful surfaces, timeless textures,
              and inspiring tile designs for your dream spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/all-tiles" className="hover:text-white">
                  All Tiles
                </Link>
              </li>

              <li>
                <Link href="/my-profile" className="hover:text-white">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold mb-6">
              Categories
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>Ceramic Tiles</li>
              <li>Porcelain Tiles</li>
              <li>Marble Tiles</li>
              <li>Mosaic Tiles</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-6">
              Contact Us
            </h3>

            <p className="text-sm text-gray-400 leading-7">
              Have a question or want to know more about
              our tile collection?
            </p>

            <a
              href="mailto:hello@tileora.com"
              className="flex items-center gap-2 mt-5 text-sm hover:text-[#b9c09b]"
            >
              <Mail size={17} />
              hello@tileora.com
              <ArrowUpRight size={14} />
            </a>

            <div className="flex gap-3 mt-6">
              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 border border-gray-600 flex items-center justify-center hover:bg-[#7b8060] transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 border border-gray-600 flex items-center justify-center hover:bg-[#7b8060] transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} Tileora. All rights reserved.
          </p>

          <p>
            Designed with passion for beautiful spaces.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;