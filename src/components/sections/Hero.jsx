import "./Hero.css";

const texts = {
  en: {
    title1: "Who",
    title2: "am I?",
    text: "I'm a junior Frontend developer who loves clean code and bold design. I create interfaces that are not just functional, but have soul.",
    cta: "Start a project with me",
  },

  cs: {
    title1: "Kdo",
    title2: "jsem?",
    text: "Jsem junior Frontend developer, který miluje čistý kód a výrazný design. Tvořím rozhraní, která nejsou jen funkční, ale mají duši.",
    cta: "Začni se mnou projekt",
  },
};

const Hero = ({ lang }) => {
  const t = texts[lang];

  return (
    <section className="hero">
      <div className="hero__orb hero__orb--right"></div>
      <div className="hero__orb hero__orb--left"></div>

      <div className="hero__content">
        <h1 className="hero__title">
          {t.title1} <br />
          <span className="hero__stroke">{t.title2}</span>
        </h1>

        <div className="hero__text-wrapper">
          <p className="hero__text">{t.text}</p>
        </div>

        <button className="hero__cta">{t.cta}</button>
      </div>
    </section>
  );
};

export default Hero;
