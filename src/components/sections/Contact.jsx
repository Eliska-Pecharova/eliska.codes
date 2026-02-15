import "./Contact.css";

const texts = {
  en: {
    title: "Contact",
    text: "Do you have a project, idea or question? Write to me and I will get back to you.",
    name: "Name",
    email: "Email",
    message: "Text message",
    send: "Send",
  },

  cs: {
    title: "Kontakt",
    text: "Máš projekt, nápad nebo otázku? Napiš mi a ozvu se ti zpět.",
    name: "Jméno",
    email: "Email",
    message: "Zpráva",
    send: "Odeslat",
  },
};

const Contact = ({ lang }) => {
  const t = texts[lang];

  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">{t.title}</h2>

      <p className="contact__text">{t.text}</p>

      <form className="contact__form">
        <input type="text" placeholder={t.name} className="contact__input" />

        <input type="email" placeholder={t.email} className="contact__input" />

        <textarea
          placeholder={t.message}
          className="contact__textarea"
        ></textarea>

        <button className="contact__button">{t.send}</button>
      </form>
    </section>
  );
};

export default Contact;
