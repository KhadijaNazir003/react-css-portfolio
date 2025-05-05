// src/pages/Contact.js
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, TextField, Button, Typography } from "@mui/material";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),
  })
  .required();

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    alert(`Thank you, ${data.name}!`);
  };

  return (
    <Box className="right" component="section" sx={{ p: 2 }}>
      <Typography variant="h4" className="section-heading" id="contact-form">
        Contact Form
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{ display: "grid", gap: 2, maxWidth: 400, mx: "auto" }}
      >
        <TextField
          label="Name"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
          fullWidth
        />
        <TextField
          label="Email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          fullWidth
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
        {isSubmitSuccessful && (
          <Typography variant="subtitle1" color="success.main">
            Submitted successfully!
          </Typography>
        )}
      </Box>
    </Box>
  );
}
