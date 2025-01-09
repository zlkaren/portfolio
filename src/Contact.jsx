import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import { BsEmojiGrin } from "react-icons/bs";
import './Contact.css';

emailjs.init('_2rFJZ-TRRxD5JQfi'); 

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const inputName= event.target.name;

    const inputValue  = event.target.value;
    setFormData((prevFormData) =>({ ...prevFormData, [inputName]: inputValue }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    const data = {
      user_name: formData.name, 
      user_email: formData.email, 
      user_message: formData.message, 
    };

   
    emailjs
      .send('service_o2ah9np', 'template_d58u055', data, '_2rFJZ-TRRxD5JQfi')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSent(true); 
        setFormData({ name: '', email: '', message: '' });
      }),
      ((err) => {
        console.log('FAILED...', err);
        alert('Une erreur est survenue lors de l’envoi. Veuillez réessayer.');
      });
  };

  return (
    <div className="backCont">
      <div className="container">
        <h2>Contact <br />
          <a>--- <BsEmojiGrin /> ---</a>
        </h2>

        {sent && <p className="alert alert-success">Message envoyé avec succès !</p>}

        <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
          <div>
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre email"
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message :</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message"
              required
            ></textarea>
          </div><br />
          <button type="submit" className="btn btn-primary w-100">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
