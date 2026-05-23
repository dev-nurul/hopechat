import { useState } from "react";

const brand = "#FF4E8C";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D14]/95 backdrop-blur-sm border-b border-[#FF4E8C]/10 shadow-sm">
      <div className="px-[5%] py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold">
          Hope<span style={{ color: brand }}>nity</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-[#A0A0B8] text-base items-center">
          <a href="#features" className="hover:text-[#FF4E8C] transition">
            Features
          </a>
          <a href="#stories" className="hover:text-[#FF4E8C] transition">
            Stories
          </a>
          <a href="#chat" className="hover:text-[#FF4E8C] transition">
            Messaging
          </a>
        </div>

        {/* Desktop Button */}
        <button
          className="hidden md:block px-5 py-2 rounded-full text-white font-medium text-sm shadow-sm hover:shadow transition hover:opacity-90"
          style={{ background: brand }}
        >
          Download Free
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-[5%] pb-5 flex flex-col gap-4 text-[#A0A0B8] bg-[#0D0D14]">
          <a
            href="#features"
            className="hover:text-[#FF4E8C] transition"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#stories"
            className="hover:text-[#FF4E8C] transition"
            onClick={() => setMenuOpen(false)}
          >
            Stories
          </a>
          <a
            href="#chat"
            className="hover:text-[#FF4E8C] transition"
            onClick={() => setMenuOpen(false)}
          >
            Messaging
          </a>

          <button
            className="mt-2 px-5 py-3 rounded-full text-white font-medium text-sm shadow-sm hover:opacity-90 transition"
            style={{ background: brand }}
          >
            Download Free
          </button>
        </div>
      )}
    </nav>
  );
}
