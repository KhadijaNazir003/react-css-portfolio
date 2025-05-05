// src/components/Footer.js
import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      className="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        textAlign: "center",
        py: 1,
      }}
    >
      <Typography variant="body2">
        © 2025 Khadija Nazir. All rights reserved.
      </Typography>
    </Box>
  );
}
