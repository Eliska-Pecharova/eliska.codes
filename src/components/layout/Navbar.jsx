import { useState, useEffect } from "react";
import "./Navbar.css";
import { Sun, Moon, Menu, X, Languages } from "lucide-react";

/**
 * Hmmm, doporučil bych pro každou React komponentu vlastní soubor s CSS stylem
 */
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
  // Pro ten theme opět ne state, ale Reactový Kontext - případně tě to naučím.
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  // K čemu je toto??? Zobrazení ScrollTop tlačítka??
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
    // Pro skládání className je tu jednodušší a čístši varianta, knihovna clsx. https://www.npmjs.com/package/clsx 
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      {/* Tady těch prvků je opravdu hodně, Logo, Navigace, Desktop Buttons, Hamburger and MobileMenu, 
      možná bych to dal do samostatných React komponent */}
      <div className="navbar__inner">
        {/* Logo */}
        <div className="navbar__brand">
          <div className="navbar__logo">
            <span className="navbar__logo-e">E</span>
          </div>
          <span className="navbar__title">ELIŠKA.CODES</span>
        </div>

        {/* Desktop links */}
        {/* Zde by nebyl špatný nápad odchytit si, když uživatel klikne na link a udělat smoothScrolling
        Případně napovím, jak na to  */}
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
