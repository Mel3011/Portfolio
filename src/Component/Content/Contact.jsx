import { useRef } from "react";
import emailjs from "@emailjs/browser";
import CONTACT from "../../assets/contact.webp";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICEID,
        import.meta.env.VITE_TEMPLATEID,
        form.current,
        import.meta.env.VITE_PUBLICKEY
      )
      .then(
        () => {
          toast.success("L'email est bien envoyé !", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          console.error(error);
        }
      );
  };

  return (
    <section className="full_Page" id="part4">
      <div className="apropos">
        <h2>Travaillons ensemble 🤝</h2>
        <div className="cv">
          <div className="image">
            <img src={CONTACT} alt="Contact image" />
          </div>
          <div className="competence">
            <div className="formulaire">
              <form
                ref={form}
                className="formulaireContact"
                onSubmit={sendEmail}
              >
                <div className="form-group">
                  <label htmlFor="nomPrenom">Nom et Prénom</label>
                  <input type="text" id="nomPrenom" name="nomPrenom" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="telephone">Numéro de téléphone</label>
                  <input type="tel" id="telephone" name="telephone" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
