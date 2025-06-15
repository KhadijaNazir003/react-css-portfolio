import React, { useEffect, useState } from "react";
import axios from "axios";
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
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/education`)
      .then((res) => setRows(res.data))
      .catch((err) => console.error("Error fetching education data:", err));
  }, []);

  return (
    <div className="right" style={{marginTop: "80px"}}>
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
              <TableRow key={row._id || row.degree}>
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
