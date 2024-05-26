import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
// import dotenv from 'dotenv';


config();
const app = express();


// Middleware to parse JSON request bodies
app.use(express.json());

app.use(cors({ // Configure CORS middleware
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true,
  })
);

// import all routes
import userProfileRoutes from './routes/userprofile.routes.js';
import authRoutes from './routes/usercred.routing.js';
import credAdminRoutes from './routes/credadmin.routes.js';
import infoTurfRoutes from './routes/infoTurf.routes.js';
import schTurfRoute from './routes/schTurf.routes.js';
import turfBookingRoute from './routes/turfBooking.routes.js';
import turfDetailsRoute from './routes/turfDetails.routes.js';
import userHistoryRoutes from './routes/userHistory.routes.js';
import healthCheckRoutes from './routes/healthCheck.routes.js';

import crontask from './Schedule/turfStatusUpdate.js';
crontask.start();
//routes
app.use('/user-profile', userProfileRoutes);
app.use('/auth', authRoutes);
app.use('/api/admin', credAdminRoutes);
app.use('/info', infoTurfRoutes);
app.use('/api/turf', schTurfRoute);
app.use('/api/turf', turfBookingRoute);
app.use('/api', turfDetailsRoute);
app.use('/user-history', userHistoryRoutes);
app.use('/healthcheck', healthCheckRoutes);

export default app;