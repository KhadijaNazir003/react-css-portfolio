// src/pages/Contact.js
import React from "react";

export default function Contact() {
  return (
    <div className="right">
      <div
        className="section-heading"
        id="contact-form"
        style={{ marginLeft: "-5px" }}
      >
        Contact Form
      </div>
      <form className="row g-3" style={{ display: "grid", gap: "1rem" }}>
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
      </form>

      <div
        className="section-heading"
        style={{ marginTop: "20px" }}
        id="profile"
      ></div>
      <p id="profiletxt"></p>

      <div
        className="section-heading"
        style={{ marginTop: "20px" }}
        id="skills"
      ></div>
      <div className="container" id="skill_inject"></div>

      <div className="section-heading" id="reference"></div>
      <div id="reference-inject"></div>
    </div>
  );
}
