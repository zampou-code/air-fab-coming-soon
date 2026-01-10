import { Facebook, Instagram, Twitter } from "lucide-react";

export function Navbar() {
  return (
    <nav className="w-full py-6 flex items-center justify-between">
      <div className="w-30 md:w-35 h-auto">
        <img
          alt="logo"
          src="images/logo.png"
          className="size-full object-contain invert brightness-0 hover:brightness-100 hover:invert-0 transition-all"
        />
      </div>
      <ul className="flex justify-center items-center gap-3 md:gap-6 text-white">
        <li>
          <a
            href="#"
            className="font-semibold text-sm md:text-base hover:text-[#2b2d83]"
          >
            À Propos
          </a>
        </li>
        <li>
          <a href="#">
            <Twitter className="size-4 md:size-5 hover:text-[#2b2d83]" />
          </a>
        </li>
        <li>
          <a href="#">
            <Facebook className="size-4 md:size-5 hover:text-[#2b2d83]" />
          </a>
        </li>

        <li>
          <a href="#">
            <Instagram className="size-4 md:size-5 hover:text-[#2b2d83]" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
