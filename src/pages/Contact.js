// src/pages/Contact.js
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Must be valid email")
      .required("Email is required"),
  })
  .required();

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // For college project: just log or alert
    console.log(data);
    alert("Thank you, " + data.name + "!");
  };

  return (
    <div className="right">
      <div className="section-heading" id="contact-form">
        Contact Form
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input id="name" className="form-control" {...register("name")} />
          {errors.name && (
            <div className="invalid-feedback d-block">
              {errors.name.message}
            </div>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input id="email" className="form-control" {...register("email")} />
          {errors.email && (
            <div className="invalid-feedback d-block">
              {errors.email.message}
            </div>
          )}
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {isSubmitSuccessful && (
            <div className="valid-feedback d-block">
              Submitted successfully!
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
