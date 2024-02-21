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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Nom:
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email:
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="objet">
            Objet:
            <input type="text" id="objet" name="objet" value={formData.objet} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="message">
            Message:
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
          </label>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
}

export default ContactForm;
