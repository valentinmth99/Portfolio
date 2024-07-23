import React from 'react'
import "./style/contact.css";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "465641ba-46c0-43e2-baba-0f5399140a75");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message envoyé, à très vite !");
      event.target.reset();
      alert(`${result}`);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact">
      <form onSubmit={onSubmit}>
        <h1>Contactez-moi</h1>
        <label for="name">Votre nom :</label>
        <input type="text" name="name" required/>
        <label for="email">Votre mail :</label>
        <input type="email" name="email" required/>
        <label for="message">Entrez votre message :</label>
        <textarea name="message" required></textarea>
        <button className="contact_button" type="submit">Envoyer</button>
      </form>
      <span>{result}</span>
    </div>
  );
}