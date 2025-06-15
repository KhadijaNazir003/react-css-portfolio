"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  Box,
  Skeleton,
  Alert,
  Chip,
  Fade,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import { School, CalendarToday, LocationOn } from "@mui/icons-material"
import { set } from "react-hook-form"

export default function Education() {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/education`)
      .then((res) => {
        console.log("API Response:", res.data) // Debug log
        setLoading(false) // Set loading to false after data is fetched
        setRows(res.data.data) // Extract the data array from the response
      })
      .catch((err) => {
        console.error("Error fetching education data:", err)
      })
  }, [])

  const LoadingSkeleton = () => (
    <TableBody>
      {[...Array(3)].map((_, index) => (
        <TableRow key={index}>
          <TableCell>
            <Skeleton variant="text" width="80%" />
          </TableCell>
          <TableCell>
            <Skeleton variant="text" width="70%" />
          </TableCell>
          <TableCell>
            <Skeleton variant="text" width="60%" />
          </TableCell>
          <TableCell>
            <Skeleton variant="text" width="50%" />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )

  const MobileEducationCard = ({ education }) => (
    <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
      <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}>
        <School sx={{ color: "primary.main", mr: 1, mt: 0.5 }} />
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5 }}>
            {education.degree}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {education.institute}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <LocationOn sx={{ fontSize: 16, color: "text.secondary", mr: 0.5 }} />
            <Typography variant="body2" color="text.secondary">
              {education.location}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CalendarToday sx={{ fontSize: 16, color: "text.secondary", mr: 0.5 }} />
              <Typography variant="body2" color="text.secondary">
                {education.year}
              </Typography>
            </Box>
            {education.status && (
              <Chip
                label={education.status}
                size="small"
                color={education.status === "Current" ? "primary" : "success"}
                variant="outlined"
              />
            )}
          </Box>
        </Box>
      </Box>
    </Paper>
  )

  return (
    <div className="right">
      <Fade in timeout={800}>
        <Box sx={{ p: 2 }}>
          <Typography
            variant="h4"
            className="section-heading"
            sx={{
              mb: 4,
              textAlign: "center",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Education
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          {isMobile ? (
            // Mobile view - Cards
            <Box>
              {loading
                ? [...Array(3)].map((_, index) => (
                    <Paper key={index} elevation={2} sx={{ p: 2, mb: 2 }}>
                      <Skeleton variant="text" width="80%" height={30} />
                      <Skeleton variant="text" width="60%" />
                      <Skeleton variant="text" width="70%" />
                      <Skeleton variant="text" width="40%" />
                    </Paper>
                  ))
                : rows.map((education) => <MobileEducationCard key={education._id} education={education} />)}
            </Box>
          ) : (
            // Desktop view - Table
            <TableContainer
              component={Paper}
              className="education-table-container"
              elevation={3}
              sx={{
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <Table className="table table-striped" aria-label="education table">
                <TableHead>
                  <TableRow>
                    <TableCell>Degree</TableCell>
                    <TableCell>Institute</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Year</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                {loading ? (
                  <LoadingSkeleton />
                ) : (
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row._id || row.degree}>
                        <TableCell>{row.degree}</TableCell>
                        <TableCell>{row.institute}</TableCell>
                        <TableCell>{row.location}</TableCell>
                        <TableCell>{row.year}</TableCell>
                        <TableCell>
                          <span
                            style={{
                              color: row.status === "Current" ? "#1976d2" : "#4caf50",
                              fontWeight: "bold",
                            }}
                          >
                            {row.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          )}
        </Box>
      </Fade>
    </div>
  )
}
