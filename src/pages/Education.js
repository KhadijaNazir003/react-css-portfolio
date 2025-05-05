// src/pages/Education.js
import React from "react";

export default function Education() {
  return (
    <div className="right">
      <div className="section-heading" id="education">
        Education
      </div>
      <div>
        <table
          id="education-table"
          className="table table-striped"
          style={{ maxWidth: "65vw", margin: "0 auto" }}
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
      </div>
    </div>
  );
}
