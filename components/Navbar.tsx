"use client";

import Link from "next/link";
import { useState } from "react";

const categories = {
  "Tools & Utilities": [
    { href: "/calculator", label: "Calculator" },
    { href: "/unit-converter", label: "Unit Converter" },
    { href: "/guess-number", label: "Guess Number" },
  ],
  "Management": [
    { href: "/todo-list", label: "To-do List" },
    { href: "/contacts", label: "Contacts" },
    { href: "/students", label: "Students" },
    { href: "/library", label: "Library" },
  ],
  "Content & Communication": [
    { href: "/notes", label: "Notes" },
    { href: "/blog", label: "Blog" },
    { href: "/chatbot", label: "Chatbot" },
  ],
};

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-xl border-b border-slate-700 px-8 py-4 sticky top-0 z-50 backdrop-blur-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          {/* Home Link */}
          <Link
            href="/"
            className="text-white hover:text-blue-400 font-bold text-xl tracking-wide transition-all duration-300 hover:scale-105 flex items-center gap-2"
            onClick={closeDropdowns}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              🏠
            </span>
            Home
          </Link>

          {/* Dropdown Categories */}
          <div className="flex items-center gap-6">
            {Object.entries(categories).map(([categoryName, items]) => (
              <div key={categoryName} className="relative group">
                <button
                  onClick={() => toggleDropdown(categoryName)}
                  className="text-gray-300 hover:text-white font-medium flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-slate-700/50 hover:shadow-lg group"
                >
                  <span className="group-hover:text-blue-400 transition-colors duration-300">
                    {categoryName}
                  </span>
                  <svg
                    className={`w-4 h-4 transform transition-all duration-300 group-hover:text-blue-400 ${
                      activeDropdown === categoryName ? "rotate-180 text-blue-400" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === categoryName && (
                  <div className="absolute top-full left-0 mt-3 w-56 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-xl shadow-2xl z-20 animate-in slide-in-from-top-5 duration-200">
                    <div className="py-3">
                      {items.map((item, index) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-5 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border-l-2 border-transparent hover:border-blue-400 flex items-center gap-3"
                          onClick={closeDropdowns}
                          style={{
                            animationDelay: `${index * 50}ms`,
                          }}
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60"></span>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Add a search or profile section */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-slate-700/50 rounded-full text-xs text-gray-400">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Online
          </div>
        </div>
      </div>

      {/* Overlay to close dropdowns when clicking outside */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-10 bg-black/20 backdrop-blur-sm"
          onClick={closeDropdowns}
        />
      )}
    </nav>
  );
}
 
export default Navbar;