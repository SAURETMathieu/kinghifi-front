import './index.css';
import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    objet: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // A changer pour envoyer au serveur

    setFormData({
      name: '',
      email: '',
      objet: '',
      message: '',
    });
  };

  return (
    <>
      <h1 className="contact-h1">
        Contact
      </h1>
      <form className="form_containeur" onSubmit={handleSubmit}>
        <div className="form_div">
          <label className="form_label" htmlFor="name">
            <p className="label_name">Nom</p>
            <input className="contact_input" type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </label>
        </div>
        <div className="form_div">
          <label className="form_label" htmlFor="email">
            <p className="label_name">Email</p>
            <input className="contact_input" type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
        </div>
        <div className="form_div">
          <label className="form_label" htmlFor="objet">
            <p className="label_name">Objet</p>
            <input className="contact_input" type="text" id="objet" name="objet" value={formData.objet} onChange={handleChange} />
          </label>
        </div>
        <div className="form_div">
          <label className="form_label" htmlFor="message">
            <p className="label_name">Message</p>
            <textarea className="contact_text-area" id="message" name="message" value={formData.message} onChange={handleChange} />
          </label>
        </div>
        <button className="submit_contact_button" type="submit">Envoyer</button>
      </form>
    </>
  );
}

export default ContactForm;
