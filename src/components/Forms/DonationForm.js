import React, { useState } from "react";
import Button from "../Buttons/Button";
import "./DonationForm.css";
import { ButtonTypes } from "../../utils/types";

const DonationForm = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para processar a doação, como enviar para um servidor
    console.log(`Donation of ${amount} by ${name}. Message: ${message}`);
    setSubmitted(true);
  };

  return (
    <div className='donation-form-container'>
      {submitted ? (
        <div className='thank-you-message'>
          <h2>Obrigada pela doação {name}!</h2>
          <p>A tua generosidade é muito apreciada.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='donation-form'>
          <label>
            Nome:
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Quantia:
            <input
              type='number'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              min='1'
              step='any'
            />
          </label>
          <label>
            Mensagem (opcional):
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <Button
            buttonType={ButtonTypes.SquaredButton}
            type='submit'
            label='Doar'
          ></Button>
        </form>
      )}
    </div>
  );
};

export default DonationForm;
