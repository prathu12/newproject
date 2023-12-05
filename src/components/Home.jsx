import React from "react";
import resume from "../Assets/Prathamesh-Pote-8999819779_A.pdf";

function Home() {
  let whatsapp_message = "https://wa.me/918999819779?text=I want to hire you";
  return (
    <div className="container-fluid bg-dark text-light min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex flex-column justify-content-center align-items-center text-center ">
        <h1>
          Hello, I am{" "}
          <span className="text-danger display-2 fw-bold">Prathamesh</span>{" "}
        </h1>
        <p className="my-info w-50 text-center ">
          I am professional Web Developer looking for the opportunity to express
          my knowledge
        </p>
      </div>
      <div>
        <a href={resume} className="btn btn-outline-danger mx-3">
          Download Resume
        </a>
        <a href={whatsapp_message} className="btn btn-outline-danger">
          Connect on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default Home;
