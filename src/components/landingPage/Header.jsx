import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "certificate", label: "Certificates" },
    { id: "projects", label: "Projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = activeSection;

      for (let i = 0; i < navLinks.length; i++) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            currentSection = navLinks[i].id;
            break;
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, navLinks]);

  return (
    <header className="bg-black sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-16 lg:h-20 text-white">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="#" className="flex items-center">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                Yash Patel
              </h1>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="relative text-sm md:text-base font-medium transition-colors duration-200"
              >
                <span>{label}</span>
                <span
                  className={`absolute left-0 -bottom-1 w-full h-0.5 bg-white origin-left transform transition-transform duration-500 ease-out ${
                    activeSection === id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <IoClose className="w-7 h-7" />
              ) : (
                <IoMenu className="w-7 h-7" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Links */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col items-center space-y-4 text-white">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className="relative text-sm sm:text-base font-medium transition-colors duration-200"
              >
                <span>{label}</span>
                <span
                  className={`absolute left-0 -bottom-1 w-full h-0.5 bg-white origin-left transform transition-transform duration-500 ease-out ${
                    activeSection === id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;