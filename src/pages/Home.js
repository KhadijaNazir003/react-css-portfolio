// src/pages/Home.js
import React from "react";

export default function Home() {
  return (
    <>
      <div className="left d-flex flex-column justify-content-center">
        <div className="profilePic" id="about" title="picture">
          <img
            src="/profilepic.jfif"
            alt="profile"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className="heading">
          <div
            className="name"
            style={{ textWrap: "nowrap", color: "white", borderColor: "white" }}
          >
            Khadija Nazir
          </div>
          <div className="qualification">Artificial Intelligence Student</div>
        </div>
        <div className="section-heading" id="contact">
          Contact
        </div>
        <div className="info">
          <div className="contact-info-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#fff"
              className="bi bi-envelope-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
            </svg>
            <a href="mailto:bsai23006@itu.edu.pk">bsai23006@itu.edu.pk</a>
          </div>
          <div className="contact-info-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423...."
              />
            </svg>
            03221227185
          </div>
          <div className="contact-info-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            ITU Punjab, Arfa Kareem Tower, Ferozpur Road, Lahore
          </div>
          <div className="contact-info-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 ..." />
            </svg>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="heading">
          <div className="name">Khadija Nazir</div>
          <div className="qualification">Artificial Intelligence Student</div>
        </div>

        <div className="section-heading" id="experience">
          Experiences
        </div>
        <div className="edu-card">
          <div className="e_head">
            <h3 className="e_name">Marketing Intern</h3>
            June 2022 - August 2022
          </div>
          <div className="institute">Marketing Company</div>
          Assisted in developing and executing digital marketing campaigns,
          contributing to a 20% increase in client engagement through social
          media platforms.
        </div>

        <div className="edu-card">
          <div className="e_head">
            <h3 className="e_name">Research Assistant</h3>
            September 2021 - May 2022
          </div>
          <div className="institute">ITU, Department of Computer Science</div>
          Conducted literature reviews and data analysis for a study on robotics
          and machine learning, enhancing research methodologies and
          contributing to a published paper.
        </div>

        <div className="edu-card">
          <div className="e_head">
            <h3 className="e_name">Customer Service Representative</h3>
            January 2020 - December 2021
          </div>
          <div className="institute">Retail Company</div>
          Provided exceptional customer support, resolving inquiries and
          complaints, which led to a 15% improvement in customer satisfaction
          ratings.
        </div>

        <div className="section-heading project" id="project">
          Projects
        </div>
        <div className="project-card">
          <div className="p_head">
            <h3 className="p_name">Text Editor in C++</h3>
            January 2023 - December 2024
          </div>
          Developed a lightweight text editor using C++ that supports basic
          functionalities such as text formatting, file operations, and syntax
          highlighting. Implemented a user-friendly interface and optimized
          performance for handling large text files.
        </div>
        {/* repeat other project-cards as in your HTML */}
      </div>
    </>
  );
}
