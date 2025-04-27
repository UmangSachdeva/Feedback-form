import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import feedbackRoutes from './routes/feedbackRoutes.js';

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // to parse JSON bodies

// Routes
app.use('/api', feedbackRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
