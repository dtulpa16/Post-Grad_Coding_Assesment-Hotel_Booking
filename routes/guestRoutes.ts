import express from 'express';
const router = express.Router();

//* Sample Data
const guests = require("../data/guests.json");
const bookings = require("../data/bookings.json"); // You will need bookings to determine current bookings and past visits

// Get all guests
router.get('/', (req, res) => {
    // TODO: Fetch all guests from your data source (JSON file)
    // TODO: Return those guests in the response
    res.send('All guests');
});

// Get details for a specific guest
router.get('/:guestId', (req, res) => {
    const { guestId } = req.params;
    // TODO: Fetch details of a specific guest based on guestId from params
    // TODO: Return the guest's details in the response
    res.send(`Details for guest with ID: ${guestId}`);
});

// Get current bookings for a specific guest
router.get('/:guestId/current-bookings', (req, res) => {
    const { guestId } = req.params;
    // TODO: Determine which bookings are "current" (e.g., based on date or status)
    // TODO: Fetch all current bookings associated with this guest from your data source
    // TODO: Return those bookings in the response
    res.send(`Current bookings for guest with ID: ${guestId}`);
});

// Get past visits for a guest
router.get('/:guestId/past-visits', (req, res) => {
    const { guestId } = req.params;
    // TODO: Determine which bookings are considered "past visits" (e.g., bookings with past dates)
    // TODO: Fetch all past visits associated with this guest from your data source
    // TODO: Return those past visits in the response
    res.send(`Past visits for guest with ID: ${guestId}`);
});

// Get billing details for a guest
router.get('/:guestId/billing', (req, res) => {
    const { guestId } = req.params;
    // TODO: Fetch billing details associated with this guest from your data source
    // This could include all charges, payments, outstanding balances, etc.
    // TODO: Return those billing details in the response
    res.send(`Billing details for guest with ID: ${guestId}`);
});

export default router;






