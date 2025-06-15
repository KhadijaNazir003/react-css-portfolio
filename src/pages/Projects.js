"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import {
  Box,
  Typography,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Fade,
  Alert,
  Skeleton,
} from "@mui/material"
import { GitHub, DateRange } from "@mui/icons-material"
import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [dialogOpen, setDialogOpen] = useState(false)


  const formatDateRange = (startDate, endDate) => {
    if (!startDate) return "Date not available"

    const start = new Date(startDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    })

    if (endDate) {
      const end = new Date(endDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      })
      return `${start} - ${end}`
    }

    return `${start} - Present`
  }

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/projects`)

        console.log("Projects API Response:", response.data) // Debug log

        if (response.data.success && response.data.data) {
          setProjects(response.data.data)
        } else {
          throw new Error("Invalid API response format")
        }
      } catch (err) {
        console.error("Error fetching projects:", err)
        setError("Failed to load projects")
  
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  // Event handlers
  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setDialogOpen(false)
    setSelectedProject(null)
  }

  // Loading skeleton component
  const ProjectSkeleton = () => (
    <Box sx={{ mb: 3 }}>
      <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 1, mb: 2 }} />
      <Skeleton variant="text" width="60%" height={30} />
      <Skeleton variant="text" width="40%" height={20} />
      <Skeleton variant="text" width="100%" height={60} />
    </Box>
  )

  // Enhanced Project Card Component
  const EnhancedProjectCard = ({ project }) => (
    <Box
      sx={{
        mb: 3,
        cursor: "pointer",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
      onClick={() => handleProjectClick(project)}
    >
      <ProjectCard title={project.title} date={formatDateRange(project.startDate, project.endDate)}>
        <Box>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {project.description || project.desc}
          </Typography>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <Box sx={{ mb: 2 }}>
              {project.technologies.map((tech, index) => (
                <Chip key={index} label={tech} size="small" variant="outlined" sx={{ mr: 1, mb: 1 }} />
              ))}
            </Box>
          )}

          {/* Action Buttons */}
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", alignItems: "center" }}>
            {project.githubUrl && (
              <Button
                size="small"
                startIcon={<GitHub />}
                variant="outlined"
                onClick={(event) => {
                  event.stopPropagation()
                  if (project.githubUrl) {
                    window.open(project.githubUrl, "_blank", "noopener,noreferrer")
                  }
                }}
              >
                View Code
              </Button>
            )}
            {project.status && <Chip label={project.status} size="small" color="success" variant="filled" />}
          </Box>
        </Box>
      </ProjectCard>
    </Box>
  )

  return (
    <div className="right" style={{ marginTop: "80px" }}>
      <Fade in timeout={800}>
        <Box sx={{ p: 2 }}>
          <Typography
            variant="h4"
            className="section-heading project"
            sx={{
              mb: 4,
              textAlign: "center",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Projects
          </Typography>

          {/* Error Alert */}
          {error && (
            <Alert severity="warning" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          {/* Loading State */}
          {loading ? (
            <Box>
              {[...Array(3)].map((_, index) => (
                <ProjectSkeleton key={index} />
              ))}
            </Box>
          ) : (
            <>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, textAlign: "center" }}>
                Here are some of the projects I've worked on. Click on any project to see more details.
              </Typography>

              {/* Projects List */}
              {projects.map((project) => (
                <EnhancedProjectCard key={project._id || project.title} project={project} />
              ))}
            </>
          )}

          {/* Project Details Dialog */}
          <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="md" fullWidth>
            {selectedProject && (
              <>
                <DialogTitle sx={{ pb: 1 }}>
                  <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
                    {selectedProject.title}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <DateRange sx={{ fontSize: 16, color: "text.secondary", mr: 0.5 }} />
                    <Typography variant="body2" color="text.secondary">
                      {formatDateRange(selectedProject.startDate, selectedProject.endDate)}
                    </Typography>
                  </Box>
                </DialogTitle>

                <DialogContent>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {selectedProject.description || selectedProject.desc}
                  </Typography>

                  {/* Technologies Used */}
                  {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                    <>
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                        Technologies Used
                      </Typography>
                      <Box sx={{ mb: 3 }}>
                        {selectedProject.technologies.map((tech, index) => (
                          <Chip key={index} label={tech} variant="filled" color="primary" sx={{ mr: 1, mb: 1 }} />
                        ))}
                      </Box>
                    </>
                  )}

                  {/* Key Features */}
                  {selectedProject.features && selectedProject.features.length > 0 && (
                    <>
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                        Key Features
                      </Typography>
                      <Grid container spacing={1}>
                        {selectedProject.features.map((feature, index) => (
                          <Grid item xs={12} sm={6} key={index}>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                              • {feature}
                            </Typography>
                          </Grid>
                        ))}
                      </Grid>
                    </>
                  )}
                </DialogContent>

                <DialogActions sx={{ p: 3, pt: 1 }}>
                  {selectedProject.githubUrl && (
                    <Button
                      startIcon={<GitHub />}
                      variant="contained"
                      onClick={() => {
                        if (selectedProject.githubUrl) {
                          window.open(selectedProject.githubUrl, "_blank", "noopener,noreferrer")
                        }
                      }}
                    >
                      View Code
                    </Button>
                  )}
                  <Button onClick={handleCloseDialog}>Close</Button>
                </DialogActions>
              </>
            )}
          </Dialog>
        </Box>
      </Fade>
    </div>
  )
}
