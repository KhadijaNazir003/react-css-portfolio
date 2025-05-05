// src/components/AwardCard.js
import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";

export default function AwardCard({ title, date, children, location }) {
  return (
    <Card className="project-card" elevation={3}>
      <CardContent>
        <div className="p_head">
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className="p_name">
              {title}
            </Typography>
            <Typography variant="h6">{location}</Typography>
          </Grid>
          <Typography variant="body2">{date}</Typography>
        </div>
        <Typography variant="body2">{children}</Typography>
      </CardContent>
    </Card>
  );
}
