import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full shadow-sm bg-white">
      <div className="flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="font-semibold text-lg">NoteVault</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-black">Features</li>
          <li className="cursor-pointer hover:text-black">Testimonials</li>
          <li className="cursor-pointer hover:text-black">About</li>
          <li className="cursor-pointer hover:text-black">Feedback</li>
        </ul>

        {/* Desktop Sign in Button */}
        <button className="hidden md:block bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-md font-medium hover:opacity-90">
          Sign in
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li className="cursor-pointer hover:text-black">Home</li>
            <li className="cursor-pointer hover:text-black">Services</li>
            <li className="cursor-pointer hover:text-black">Contact us</li>
            <li className="cursor-pointer hover:text-black">Our projects</li>
          </ul>

          {/* Mobile Sign in Button */}
          <button className="mt-4 w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-md font-medium hover:opacity-90">
            Sign in
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
