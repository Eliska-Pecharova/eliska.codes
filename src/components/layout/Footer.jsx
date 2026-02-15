import "./Footer.css";

const texts = {
  en: {
    title1: "Build the",
    title2: "future",
    title3: "with me",
    email: "eliska.codes@gmail.com",
    github: "GitHub",
    linkedin: "LinkedIn",
    copy: "Frontend Developer",
  },

  cs: {
    title1: "Buduj",
    title2: "budoucnost",
    title3: "se mnou",
    email: "eliska.codes@gmail.com",
    github: "GitHub",
    linkedin: "LinkedIn",
    copy: "Frontend Developer",
  },
};

const Footer = ({ lang }) => {
  const t = texts[lang];

  return (
    <footer className="footer">
      <h2 className="footer__title">
        {t.title1} <span>{t.title2}</span> {t.title3}
      </h2>

      <a href="mailto:hello@eliska.dev" className="footer__email">
        {t.email}
      </a>

      <div className="footer__social">
        <a href="https://github.com/Eliska-Pecharova" target="_blank">
          {t.github}
        </a>
        <a
          href="https://www.linkedin.com/in/eli%C5%A1ka-pecharov%C3%A1-445260380/"
          target="_blank"
        >
          {t.linkedin}
        </a>
      </div>

      <p className="footer__copy">
        © {new Date().getFullYear()} Eliška – {t.copy}
      </p>
    </footer>
  );
};

export default Footer;
