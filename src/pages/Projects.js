import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Text Editor in C++",
      date: "January 2023 - December 2024",
      desc: "Developed a lightweight text editor using C++ that supports basic functionalities such as text formatting, file operations, and syntax highlighting. Implemented a user-friendly interface and optimized performance for handling large text files.",
    },
    {
      title: "Fighting 2D Game in Unity",
      date: "November 2020 - April 2021",
      desc: "Created a 2D fighting game using Unity, featuring character selection, dynamic combat mechanics, and engaging animations. Designed levels and integrated sound effects, enhancing the overall gaming experience while focusing on responsive controls and gameplay balance.",
    },
    {
      title: "Tic‑Tac‑Toe Game in C++",
      date: "May 2022 - December 2023",
      desc: "Developed a console‑based Tic‑Tac‑Toe game in C++ that allows single‑player and multiplayer modes. Implemented game logic, user input handling, and a simple AI opponent, providing an engaging experience while demonstrating fundamental programming concepts.",
    },
    {
      title: "TaskBuddy",
      date: "January 2020 - December 2021",
      desc: "TaskBuddy is a user‑friendly mobile application designed to help users efficiently manage their tasks and enhance productivity. With an intuitive interface, TaskBuddy allows users to create, organize, and prioritize tasks effortlessly.",
    },
  ];

  return (
    <div className="right">
      <div className="section-heading project" id="project">
        Projects
      </div>
      {projects.map((p) => (
        <ProjectCard key={p.title} title={p.title} date={p.date}>
          {p.desc}
        </ProjectCard>
      ))}
    </div>
  );
}
