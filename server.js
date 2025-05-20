// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB Connected"))
// .catch((err) => console.error(err));
// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');
// require('dotenv').config();

// const educationRoutes = require('./routes/educationRoutes');
// // const skillRoutes = require('./routes/skillRoutes');
// // const projectRoutes = require('./routes/projectRoutes');
// // const experienceRoutes = require('./routes/experienceRoutes');

// const app = express();
// connectDB();

// // Middleware
// app.use(cors({ origin: 'http://localhost:3000' }));
// app.use(express.json());

// // Routes
// app.use('/api/education', educationRoutes);
// // app.use('/api/skills', skillRoutes);
// // app.use('/api/projects', projectRoutes);
// // app.use('/api/experience', experienceRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // This will use MONGO_URI from .env
require('dotenv').config(); // Load environment variables

const educationRoutes = require('./routes/educationRoutes');

const app = express();

// Connect to MongoDB Atlas
connectDB();

// Middleware
app.use(cors({ origin: 'http://localhost:3000' })); // Allow React frontend
app.use(express.json()); // Parse JSON requests

// Routes
app.use('/api/education', educationRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
