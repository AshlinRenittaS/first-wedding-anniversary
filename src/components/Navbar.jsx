import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full px-5 md:px-10 py-5 flex items-center justify-between z-50 bg-[#fff5f2]/30 backdrop-blur-md border-b border-white/20">

      {/* Logo */}
      <Link to="/">
        <h1 className="flex items-center gap-2 text-2xl md:text-3xl heading-font text-[#7a1020]">
          <Heart size={20} />
          Our Story
        </h1>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10 text-[#3f2a2a] font-medium">

        <Link to="/">
          <li className="hover:text-[#7a1020] cursor-pointer">
            Home
          </li>
        </Link>

        <Link to="/timeline">
          <li className="hover:text-[#7a1020] cursor-pointer">
            Timeline
          </li>
        </Link>

        <Link to="/gallery">
          <li className="hover:text-[#7a1020] cursor-pointer">
            Gallery
          </li>
        </Link>

        <Link to="/letter">
            <li className="hover:text-[#7a1020] cursor-pointer">
              Letter
            </li>
        </Link>

        <Link to="/distance">
          <li className="hover:text-[#7a1020] cursor-pointer">
            Distance
          </li>
        </Link>

        <Link to="/surprise">
          <li className="hover:text-[#7a1020] cursor-pointer">
            Surprise
          </li>
        </Link>

        <Link to="/forever">
          <li className="hover:text-[#7a1020] cursor-pointer">
            Forever
          </li>
        </Link>
      </ul>

      {/* Mobile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-[#7a1020]"
      >
        {open ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-20 left-0 w-full bg-[#fff5f2]/95 backdrop-blur-lg shadow-xl transition-all duration-300 md:hidden ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 py-10 text-[#3f2a2a] text-lg">

          <Link to="/" onClick={() => setOpen(false)}>
            <li>Home</li>
          </Link>

          <Link to="/timeline" onClick={() => setOpen(false)}>
            <li>Timeline</li>
          </Link>

          <Link to="/gallery" onClick={() => setOpen(false)}>
            <li>Gallery</li>
          </Link>

          <Link to="/letter" onClick={() => setOpen(false)}>
            <li>Letter</li>
          </Link>

          <Link to="/distance" onClick={() => setOpen(false)}>
            <li>Distance</li>
          </Link>

          <Link to="/surprise" onClick={() => setOpen(false)}>
            <li>Surprise</li>
          </Link>

          <Link to="/forever" onClick={() => setOpen(false)}>
            <li>Forever</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;