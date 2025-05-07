import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function ProjectCard({ title, date, children }) {
  return (
    <Card className="project-card" elevation={3}>
      <CardContent>
        <div className="p_head">
          <Typography component="h3" className="p_name">
            {title}
          </Typography>
          <Typography variant="body2">{date}</Typography>
        </div>
        <Typography variant="body2">{children}</Typography>
      </CardContent>
    </Card>
  );
}
