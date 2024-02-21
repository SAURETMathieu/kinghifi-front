import './index.css';
import { useState } from 'react';
import fetchData from '../../services/api/call.api';

function ContactForm() {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    html: '',
    email: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetchData('POST', 'contact', formData);
      console.log(response);
      console.log(formData);
    } catch (error) {
      console.log(error);
    }

    setFormData({
      from: '',
      to: '',
      html: '',
      email: '',
      description: '',
    });
  };

  return (
    <>
      <h1 className="contact-h1">
        Contact
      </h1>
      <form className="form_containeur" onSubmit={handleSubmit}>

        <div className="form_div">
          <label className="form_label" htmlFor="from">
            <p className="label_name">from</p>
            <input className="contact_input" type="email" id="from" name="from" value={formData.from} onChange={handleChange} />
          </label>
        </div>

        <div className="form_div">
          <label className="form_label" htmlFor="to">
            <p className="label_name">to</p>
            <input className="contact_input" type="text" id="to" name="to" value={formData.to} onChange={handleChange} />
          </label>
        </div>

        <div className="form_div">
          <label className="form_label" htmlFor="html">
            <p className="label_name">html</p>
            <input className="contact_input" type="text" id="html" name="html" value={formData.html} onChange={handleChange} />
          </label>
        </div>

        <div className="form_div">
          <label className="form_label" htmlFor="email">
            <p className="label_name">email</p>
            <input className="contact_input" type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
        </div>

        <div className="form_div">
          <label className="form_label" htmlFor="message">
            <p className="label_name">description</p>
            <textarea className="contact_text-area" id="description" name="description" value={formData.description} onChange={handleChange} />
          </label>
        </div>

        <button className="submit_contact_button" type="submit">Envoyer</button>
      </form>
    </>
  );
}

export default ContactForm;
