"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w28i239",
        "template_tymn56b",
        form.current,
        "r6tMCww5N7LXd029h"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire("Mensaje enviado!");
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Mensaje no enviado",
            text: "Por favor, intenta nuevamente",
          });
        }
      );
  };

  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <h1 className="mb-3 text-lg">Contactame</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          id="name"
          placeholder="Tu nombre"
          name="name"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <br />
        <br />
        <input
          type="email"
          id="email"
          placeholder="Tu email"
          name="email"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <br />
        <br />

        <textarea
          id="message"
          placeholder="Mensaje"
          name="message"
          className="textarea textarea-bordered w-full max-w-xs"
          rows="5"
          required
        ></textarea>
        <br />
        <br />

        <input
          type="submit"
          className="btn btn-wide bg-primary"
          value="Enviar"
        />
      </form>
    </div>
  );
};

export default ContactForm;
