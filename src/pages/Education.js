// src/pages/Education.js
import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
} from "@mui/material";

export default function Education() {
  const rows = [
    {
      degree: "Bachelor of Science in Artificial Intelligence",
      institute: "ITU Punjab",
      location: "Lahore",
      year: "2027",
    },
    {
      degree: "Master of Science in Computer Science",
      institute: "Future University",
      location: "Lahore",
      year: "2029",
    },
  ];

  return (
    <div className="right">
      <Typography variant="h5" className="section-heading" id="education">
        Education
      </Typography>
      <TableContainer component={Paper} className="education-table-container">
        <Table className="table table-striped" aria-label="education table">
          <TableHead>
            <TableRow>
              <TableCell>Degree</TableCell>
              <TableCell>Institute</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.degree}>
                <TableCell>{row.degree}</TableCell>
                <TableCell>{row.institute}</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>{row.year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
