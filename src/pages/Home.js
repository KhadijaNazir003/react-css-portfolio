"use client"

import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"
import AwardCard from "../components/AwardCard"

export default function Home() {
  const [awards, setAwards] = useState([])
  const [experiences, setExperiences] = useState([])
  const [projects, setProjects] = useState([])
  const [education, setEducation] = useState([])

  // Format date range for experiences and projects
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [awardsRes, experienceRes, projectsRes, educationRes] = await Promise.all([
          axios.get(`${process.env.REACT_APP_API_URL}/api/awards`),
          axios.get(`${process.env.REACT_APP_API_URL}/api/experience`), // Fixed endpoint name
          axios.get(`${process.env.REACT_APP_API_URL}/api/projects`),
          axios.get(`${process.env.REACT_APP_API_URL}/api/education`),
        ])

        console.log("Awards:", awardsRes.data)
        console.log("Experiences:", experienceRes.data)
        console.log("Projects:", projectsRes.data)
        console.log("Education:", educationRes.data)

        // Extract data from the nested response structure
        setAwards(awardsRes.data.success ? awardsRes.data.data : [])
        setExperiences(experienceRes.data.success ? experienceRes.data.data : [])
        setProjects(projectsRes.data.success ? projectsRes.data.data : [])
        setEducation(educationRes.data.success ? educationRes.data.data : [])

        console.log("Awards:", awardsRes.data)
        console.log("Experiences:", experienceRes.data)
        console.log("Projects:", projectsRes.data)
        console.log("Education:", educationRes.data)
      } catch (err) {
        console.error("Error fetching data:", err)
        // Set fallback data if API fails
        setAwards([
          {
            _id: "1",
            title: "Certificate in Public Speaking",
            date: "April 2022",
            description:
              "Won second position in public speaking competition, developed skills to present confidently in front of diverse audiences.",
          },
        ])
        setExperiences([
          {
            _id: "1",
            title: "Marketing Intern",
            company: "Marketing Company",
            startDate: "2022-06-01",
            endDate: "2022-08-31",
            description:
              "Assisted in developing and executing digital marketing campaigns, contributing to a 20% increase in client engagement through social media platforms.",
          },
        ])
        setProjects([
          {
            _id: "1",
            title: "Text Editor in C++",
            startDate: "2023-01-01",
            endDate: "2024-12-01",
            description:
              "Developed a lightweight text editor using C++ that supports basic functionalities such as text formatting, file operations, and syntax highlighting.",
          },
        ])
        setEducation([
          {
            _id: "1",
            degree: "Bachelor of Science in Artificial Intelligence",
            institute: "ITU Punjab",
            location: "Lahore, Pakistan",
            year: "2027",
          },
        ])
      }
    }

    fetchData()
  }, [])

  return (
    <Grid container item xs={12} wrap="nowrap" className="left-right-container">
      <Grid item xs={4} md={6}>
        <div className="left d-flex flex-column justify-content-center">
          <div className="profilePic" id="about" title="picture">
            <img src="/profilepic.jfif" alt="profile" />
          </div>
          <div className="heading">
            <div className="name">Khadija Nazir</div>
            <div className="qualification">Artificial Intelligence Student</div>
          </div>
          <div className="section-heading" id="contact">
            Contact
          </div>
          <div className="info">
            <div className="contact-info-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#fff"
                className="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
              </svg>
              <a href="mailto:bsai23006@itu.edu.pk">bsai23006@itu.edu.pk</a>
            </div>
            <div className="contact-info-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423...." />
              </svg>
              03221227185
            </div>
            <div className="contact-info-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
              ITU Punjab, Arfa Kareem Tower, Ferozpur Road, Lahore
            </div>
            <div className="contact-info-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 ..." />
              </svg>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                linkedin
              </a>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={8} md={6} className="right">
        <div className="heading">
          <div className="name">Khadija Nazir</div>
          <div className="qualification">Artificial Intelligence Student</div>
        </div>

        <div className="section-heading" id="experience">
          Experiences
        </div>
        {experiences.map((e, index) => (
          <AwardCard
            key={e._id || `exp-${index}`}
            title={e.title}
            date={formatDateRange(e.startDate, e.endDate)}
            location={e.company || e.location}
          >
            {e.description}
          </AwardCard>
        ))}

        <div id="project" className="section-heading project">
          Projects
        </div>
        {projects.map((p, index) => (
          <AwardCard
            className="project-card"
            key={p._id || `proj-${index}`}
            title={p.title}
            date={formatDateRange(p.startDate, p.endDate)}
          >
            {p.description}
          </AwardCard>
        ))}

        <div className="section-heading" id="awards">
          Awards
        </div>
        {awards.map((a, index) => (
          <AwardCard key={a._id || `award-${index}`} title={a.title} date={a.date}>
            {a.description}
          </AwardCard>
        ))}

        <div className="section-heading" id="education">
          Education
        </div>
        {education.map((e, index) => (
          <AwardCard
            key={e._id || `edu-${index}`}
            title={e.degree || e.title}
            date={e.year}
            location={e.institute || e.location}
          >
            {e.description}
          </AwardCard>
        ))}
      </Grid>
    </Grid>
  )
}
