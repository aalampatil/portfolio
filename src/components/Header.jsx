import React from "react";

const navItems = ["About", "Experience", "Projects", "Contact", "Socials", "Resume"];

function Header() {
  return (
    <header className="w-full bg-black text-white border-b border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-center space-x-8 text-sm font-medium">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-gray-400 transition-colors duration-200"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
