// src/pages/Home.js
import { Grid } from "@mui/material";
import React from "react";
import AwardCard from "../components/AwardCard";

export default function Home() {
  const awards = [
    {
      title: "Certificate in Public Speaking",
      date: "April 2022",
      desc: "Won second position in public speaking competition, developed skills to present confidently in front of diverse audiences.",
    },
    {
      title: "Leadership Development Program Certificate",
      date: "June 2023",
      desc: "Participated in a school‑sponsored leadership development program covering teamwork, conflict resolution, and project management through workshops.",
    },
    {
      title: "Certificate of Participation in Science Fair",
      date: "May 2024",
      desc: "Recognized for participation in the annual school science fair, presenting a project on renewable energy solutions, which fostered skills in research, experimentation, and presentation.",
    },
    {
      title: "Digital Literacy Course Certificate",
      date: "January 2025",
      desc: "Completed a digital literacy course that covered essential skills in using technology, online research, and digital communication, preparing for academic and professional environments.",
    },
  ];

  const experiences = [
    {
      title: "Marketing Intern",
      location: "Marketing Company",
      date: "June 2022 - August 2022",
      desc: "Assisted in developing and executing digital marketing campaigns, contributing to a 20% increase in client engagement through social media platforms.",
    },
    {
      title: "Research Assistant",
      location: "ITU, Department of Computer Science",
      date: "September 2021 - May 2022",
      desc: "Conducted literature reviews and data analysis for a study on robotics and machine learning, enhancing research methodologies and contributing to a published paper.",
    },
    {
      title: "Customer Service Representative",
      location: "Retail Company",
      date: "January 2020 - December 2021",
      desc: "Provided exceptional customer support, resolving inquiries and complaints, which led to a 15% improvement in customer satisfaction ratings.",
    },
  ];

  const projects = [
    {
      title: "Text Editor in C++",
      date: "January 2023 - December 2024",
      desc: "Developed a lightweight text editor using C++ that supports basic functionalities such as text formatting, file operations, and syntax highlighting.",
    },
    {
      title: "Fighting 2D Game in Unity",
      date: "November 2020 - April 2021",
      desc: "Created a 2D fighting game using Unity, featuring character selection, dynamic combat mechanics, and engaging animations.",
    },
    {
      title: "Tic-Tac-Toe Game in C++",
      date: "May 2022 - December 2023",
      desc: "Developed a console-based Tic-Tac-Toe game in C++ that allows single-player and multiplayer modes. Implemented game logic, user input handling, and a simple AI opponent, providing an engaging experience while demonstrating fundamental programming concepts.",
    },
    {
      title: "TaskBuddy",
      date: "January 2020 - December 2021",
      desc: "Developed a user-friendly mobile application designed to help users efficiently manage their tasks and enhance productivity. With an intuitive interface, TaskBuddy allows users to create, organize, and prioritize tasks effortlessly.",
    },
  ];

  const education = [
    {
      title: "Bachelor of Science in Artificial Intelligence",
      location: "ITU Punjab",
      date: "2027",
    },
    {
      title: "Master of Science in Computer Science",
      location: "Future University",
      date: "2029",
    },
  ];

  return (
    <Grid container item xs={12} wrap="nowrap">
      <Grid item xs={4} md={6}>
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
              style={{
                textWrap: "nowrap",
                color: "white",
                borderColor: "white",
              }}
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
      </Grid>
      <Grid item xs={8} md={6} className="right">
        <div className="heading">
          <div className="name">Khadija Nazir</div>
          <div className="qualification">Artificial Intelligence Student</div>
        </div>
        <div className="section-heading" id="experience">
          Experiences
        </div>
        {experiences.map((e) => (
          <AwardCard
            key={e.title}
            title={e.title}
            date={e.date}
            location={e.location}
          >
            {e.desc}
          </AwardCard>
        ))}
        <div id="project" className="section-heading project">
          Projects
        </div>
        {projects.map((p) => (
          <AwardCard key={p.title} title={p.title} date={p.date} l>
            {p.desc}
          </AwardCard>
        ))}
        <div className="section-heading" id="awards">
          Awards
        </div>
        {awards.map((a) => (
          <AwardCard key={a.title} title={a.title} date={a.date}>
            {a.desc}
          </AwardCard>
        ))}
        <div className="section-heading" id="education">
          Education
        </div>
        {education.map((e) => (
          <AwardCard
            key={e.title}
            title={e.title}
            date={e.date}
            location={e.location}
          >
            {e.desc}
          </AwardCard>
        ))}
      </Grid>

      {/* <div id="project" class="section-heading" class="project">Projects</div>
      <div>
        <div class="project-card">
          <div class="p_head">
            <h3 class="p_name">Text Editor in C++</h3>
            January 2023 - December 2024
          </div>
          Developed a lightweight text editor using C++ that supports basic functionalities such as text formatting, file operations, and syntax highlighting. Implemented a user-friendly interface and optimized performance for handling large text files.
        </div>
        <div class="project-card">
          <div class="p_head">
            <h3 class="p_name">Fighting 2D Game in Unity</h3>
            November 2020 - April 2021
          </div>
          Created a 2D fighting game using Unity, featuring character selection, dynamic combat mechanics, and engaging animations. Designed levels and integrated sound effects, enhancing the overall gaming experience while focusing on responsive controls and gameplay balance.
        </div>
        <div class="project-card">
          <div class="p_head">
            <h3 class="p_name">Tic-Tac-Toe Game in C++</h3>
            May 2022 - December 2023
          </div>
          Developed a console-based Tic-Tac-Toe game in C++ that allows single-player and multiplayer modes. Implemented game logic, user input handling, and a simple AI opponent, providing an engaging experience while demonstrating fundamental programming concepts.
        </div>
        <div class="project-card">
          <div class="p_head">
            <h3 class="p_name">TaskBuddy</h3>
            January 2020 - December 2021
          </div>
          TaskBuddy is a user-friendly mobile application designed to help users efficiently manage their tasks and enhance productivity. With an intuitive interface, TaskBuddy allows users to create, organize, and prioritize tasks effortlessly.
        </div>
      </div>
      <div class="section-heading" id="awards">Awards</div>
      <div>
        <div class="project-card">
          <div class="p_head">
            <h3 class="p_name">Certificate in Public Speaking</h3>
            April 2022
          </div>
          Won second position in public speaking competition, focused on effective communication techniques, speech delivery, and audience engagement. Developed skills to present confidently in front of diverse audiences.
        </div>
        <div class="project-card">
          <div class="p_head">
            <h3 class="p_name">Leadership Development Program Certificate</h3>
            June 2023
          </div>
          Participated in a school-sponsored leadership development program, enhancing skills in teamwork, conflict resolution, and project management through workshops and group activities.
        </div>
        <div class="project-card">
          <div class="p_head">
            <h3 class="p_name">Certificate of Participation in Science Fair</h3>
            May 2024
          </div>
          Recognized for participation in the annual school science fair, presenting a project on renewable energy solutions, which fostered skills in research, experimentation, and presentation.
        </div>
        <div class="project-card">
          <div class="p_head">
            <h3 class="p_name">Digital Literacy Course Certificate</h3>
            Januaury 2025
          </div>
          Completed a digital literacy course that covered essential skills in using technology, online research, and digital communication, preparing for academic and professional environments.
        </div>
      </div>
      <div class="section-heading" id="education">Education</div>
      <div>
        <table
          id="education-table"
          class="table table-striped"
          style="max-width: 65vw; margin: 0 auto"
        >
          <thead>
            <tr>
              <th scope="col">Degree</th>
              <th scope="col">Institute</th>
              <th scope="col">Location</th>
              <th scope="col">Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bachelor of Science in Artificial Intelligence</td>
              <td>ITU Punjab</td>
              <td>Lahore</td>
              <td>2027</td>
            </tr>
            <tr>
              <td>Master of Science in Computer Science</td>
              <td>Future University</td>
              <td>Lahore</td>
              <td>2029</td>
            </tr>
          </tbody>
        </table>
      </div> */}

      {/* <div className="right">
        <div className="heading">
          <div className="name">Khadija Nazir</div>
          <div className="qualification">Artificial Intelligence Student</div>
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
      </div> */}
    </Grid>
  );
}
