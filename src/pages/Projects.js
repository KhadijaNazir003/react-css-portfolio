// src/pages/Projects.js
import React from "react";

export default function Projects() {
  return (
    <div className="right">
      <div className="heading">
        <div className="name">Khadija Nazir</div>
        <div className="qualification">Artificial Intelligence Student</div>
      </div>

      <div className="section-heading project" id="project">
        Projects
      </div>
      <div>
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

        <div className="project-card">
          <div className="p_head">
            <h3 className="p_name">Fighting 2D Game in Unity</h3>
            November 2020 - April 2021
          </div>
          Created a 2D fighting game using Unity, featuring character selection,
          dynamic combat mechanics, and engaging animations. Designed levels and
          integrated sound effects, enhancing the overall gaming experience
          while focusing on responsive controls and gameplay balance.
        </div>

        <div className="project-card">
          <div className="p_head">
            <h3 className="p_name">Tic-Tac-Toe Game in C++</h3>
            May 2022 - December 2023
          </div>
          Developed a console-based Tic-Tac-Toe game in C++ that allows
          single-player and multiplayer modes. Implemented game logic, user
          input handling, and a simple AI opponent, providing an engaging
          experience while demonstrating fundamental programming concepts.
        </div>

        <div className="project-card">
          <div className="p_head">
            <h3 className="p_name">TaskBuddy</h3>
            January 2020 - December 2021
          </div>
          TaskBuddy is a user-friendly mobile application designed to help users
          efficiently manage their tasks and enhance productivity. With an
          intuitive interface, TaskBuddy allows users to create, organize, and
          prioritize tasks effortlessly.
        </div>
      </div>
    </div>
  );
}
