import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Change navbar style on scroll
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  // Listen for scroll events
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  const sections = [
    { name: "home", icon: "M4 6h16M4 12h16M4 18h16" },
    { name: "about", icon: "M4 4h16v16H4z" },
    { name: "education", icon: "M12 2l9 4-9 4-9-4z" },
    { name: "skills", icon: "M6 6h12v12H6z" },
    { name: "projects", icon: "M8 4h8v16H8z" },
    { name: "contact", icon: "M2 12h20M12 2v20" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <img
          src="/images/name logo image.png"
          alt="Portfolio"
          className="w-34 h-16"
        />

        {/* Mobile Hamburger Menu */}
        <button
          className="block md:hidden text-gray-600 hover:text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {sections.map((section) => (
            <button
              key={section.name}
              onClick={() => scrollToSection(section.name)}
              className="capitalize text-gray-600 hover:text-blue-600 px-6"
            >
              {section.name}
              <div
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-transparent h-1 w-0 transition-all duration-500 ease-out group-hover:w-full`}
              >
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent bg-repeat-x"></div>
              </div>
            </button>
          ))}
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col space-y-4 py-4 md:hidden">
            {sections.map((section) => (
              <button
                key={section.name}
                onClick={() => {
                  scrollToSection(section.name);
                  setMenuOpen(false);
                }}
                className="capitalize text-gray-600 hover:text-blue-500 px-6 flex items-center space-x-2"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={section.icon}
                  />
                </svg>
                <span>{section.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
