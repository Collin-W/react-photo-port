import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function ContactForm() {
  const [errorMessage, setErrorMessage] = useState("");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
    } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
      console.log('errorMessage', errorMessage); 

      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      }
    }
    

    setFormState({ ...formState, [e.target.name]: e.target.value });
  

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <div>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            defaultValue={name}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            defaultValue={email}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            onChange={handleChange}
            name="message"
            rows="5"
            defaultValue={message}
          />
        </div>

{errorMessage && (
    <div>
        <p className="error-text">{errorMessage}</p>
    </div>
)}

        <button type="submit">Submit</button>
      </form>
    </div>
  );

}
