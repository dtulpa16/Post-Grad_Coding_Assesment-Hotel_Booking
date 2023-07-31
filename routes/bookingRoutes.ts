import express from 'express';
const router = express.Router();

//* Sample Data
const bookings = require("../data/bookings.json");
const rooms = require("../data/rooms.json");

// Create a booking
router.post('/', (req, res) => {
    // TODO: Create a new booking with the provided details
    res.send('New booking created');
});

// Check room availability
router.get('/check-availability/:roomId', (req, res) => {
    const { roomId } = req.params;
    // TODO: Check if a room is available for the specified date range
    // TODO: Fetch the availability details from your data source (JSON file)
    res.send(`Check availability for room with ID: ${roomId}`);
});

// Get a specific booking
router.get('/:bookingId', (req, res) => {
    const { bookingId } = req.params;
    // TODO: Fetch details of a specific booking based on bookingId from params
    res.send(`Details of booking with ID: ${bookingId}`);
});

// Update a booking
router.put('/:bookingId', (req, res) => {
    const { bookingId } = req.params;
    // TODO: Update a booking based on bookingId from params
    res.send(`Booking with ID: ${bookingId} updated`);
});

// Cancel a booking
router.delete('/:bookingId', (req, res) => {
    const { bookingId } = req.params;
    // TODO: Cancel a booking based on bookingId from params
    res.send(`Booking with ID: ${bookingId} cancelled`);
});

export default router;