import { Paper, Typography, Box } from "@mui/material"

const ProjectCard = ({ title, date, location, children }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        mb: 2,
        borderRadius: 2,
        transition: "all 0.3s ease",
        "&:hover": {
          elevation: 4,
          transform: "translateY(-2px)",
        },
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          {title}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
          {date && (
            <Typography variant="body2" color="text.secondary">
              {date}
            </Typography>
          )}
          {location && (
            <Typography variant="body2" color="text.secondary">
              • {location}
            </Typography>
          )}
        </Box>
      </Box>

      <Box>{children}</Box>
    </Paper>
  )
}

export default ProjectCard
