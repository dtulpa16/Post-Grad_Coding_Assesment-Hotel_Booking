const express = require("express");
const router = express.Router();



// Make a new booking
router.post('/', (req, res) => {
    // TODO: Implement booking logic:
    // 1. Check room availability for the given dates
    // 2. If available, create a booking record in the database
    // 3. Associate the booking with a guest
    // 4. Send a confirmation response to the client
    res.status(201).json({ message: "Booking created!" });
});



module.exports = router;