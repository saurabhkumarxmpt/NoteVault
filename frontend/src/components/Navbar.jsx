import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full py-4">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4">

        {/* Logo */}
        <div className="text-2xl font-bold">MyLogo</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">About</li>
          <li className="hover:text-blue-500 cursor-pointer">Services</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block px-5 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-200">
          Get Started
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 py-3 space-y-3 bg-white shadow-md rounded-lg mt-3">
          <p className="hover:text-blue-500 cursor-pointer">Home</p>
          <p className="hover:text-blue-500 cursor-pointer">About</p>
          <p className="hover:text-blue-500 cursor-pointer">Services</p>
          <p className="hover:text-blue-500 cursor-pointer">Contact</p>

          <button className="w-full px-5 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-200">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
