import { useState, useEffect } from "react";
import "./Navbar.css";
import { Sun, Moon, Menu, X, Languages } from "lucide-react";

const ThemeButton = ({ theme, toggleTheme, toggleLang }) => (
  <div className="navbar__buttons">
    <button className="navbar__theme-btn" onClick={toggleTheme}>
      {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
      {theme === "dark" ? "Light" : "Dark"}
    </button>

    <button className="navbar__lang-btn" onClick={toggleLang}>
      <Languages size={16} />
    </button>
  </div>
);

const Navbar = ({ lang, toggleLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <div className="navbar__brand">
          <div className="navbar__logo">
            <span className="navbar__logo-e">E</span>
          </div>
          <span className="navbar__title">ELIŠKA.CODES</span>
        </div>

        {/* Desktop links */}
        <div className="navbar__links">
          <a href="#projects">Projects</a>
          <a href="#skills">Tech Stack</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Desktop buttons */}
        <ThemeButton
          theme={theme}
          toggleTheme={toggleTheme}
          toggleLang={toggleLang}
        />

        {/* Hamburger */}
        <button className="navbar__menu-btn" onClick={toggleMenu}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`navbar__mobile ${menuOpen ? "open" : ""}`}>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>
          Tech Stack
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>

        <ThemeButton
          theme={theme}
          toggleTheme={toggleTheme}
          toggleLang={toggleLang}
        />
      </div>
    </nav>
  );
};

export default Navbar;
