import express, { Request, Response } from 'express';
const router = express.Router();

//* Sample Data
const rooms = require("../data/rooms.json");

// Get all available rooms
router.get('/', (req: Request, res: Response) => {
    res.send('All available rooms');
});

// Get details for a specific room
router.get('/:roomId', (req: Request, res: Response) => {
    const { roomId } = req.params;
    res.send(`Details for room with ID: ${roomId}`);
});

// Get bookings associated with a specific room
router.get('/:roomId/bookings', (req: Request, res: Response) => {
    const { roomId } = req.params;
    res.send(`Bookings for room with ID: ${roomId}`);
});

export default router;
