const express = require('express');
const bodyParser = require('body-parser');
const room = require("./routes/rooms")
const guest = require("./routes/guests")
const booking = require("./routes/bookings")
const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/rooms", room);
app.use("/api/guests", guest);
app.use("/api/bookings", booking);


// Error handling (basic)
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

// TODO: Implement other CRUD operations for rooms, guests, and bookings:
// - Update room details, guest information, booking dates/status
// - Delete rooms, guests, bookings
// - Fetch specific room, guest, booking by ID