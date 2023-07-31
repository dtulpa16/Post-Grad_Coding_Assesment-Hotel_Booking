import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import roomRoutes from './routes/roomRoutes';
import guestRoutes from './routes/guestRoutes';
import bookingRoutes from './routes/bookingRoutes';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/rooms', roomRoutes);
app.use('/api/guests', guestRoutes);
app.use('/api/bookings', bookingRoutes);
// Server start
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// TODO: Set up error-handling middleware.
// TODO: Connect to a database (if needed).
// TODO: Consider implementing authentication and authorization.