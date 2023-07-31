import express from 'express';
const router = express.Router();

//* Sample Data
const rooms = require("../data/rooms.json");

// Get all available rooms
router.get('/', (req, res) => {
    // TODO: Fetch all rooms from your data source (JSON file)
    // TODO: Return those rooms in the response
    res.send('All available rooms');
});

// Get details for a specific room
router.get('/:roomId', (req, res) => {
    const { roomId } = req.params;
    // TODO: Based on the provided roomId, fetch the room's details
    // TODO: Return those details in the response
    res.send(`Details for room with ID: ${roomId}`);
});

// Get bookings associated with a specific room
router.get('/:roomId/bookings', (req, res) => {
    const { roomId } = req.params;
    // TODO: Based on the provided roomId, fetch all bookings associated with that room
    // TODO: Return those bookings in the response
    res.send(`Bookings for room with ID: ${roomId}`);
});

export default router;
