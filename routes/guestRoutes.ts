import express, { Request, Response } from 'express';
const router = express.Router();

//* Sample Data
const guests = require("../data/guests.json");
const bookings = require("../data/bookings.json");

// Get all guests
router.get('/', (req: Request, res: Response) => {
    res.send('All guests');
});

// Get details for a specific guest
router.get('/:guestId', (req: Request, res: Response) => {
    const { guestId } = req.params;
    res.send(`Details for guest with ID: ${guestId}`);
});

// Get current bookings for a specific guest
router.get('/:guestId/current-bookings', (req: Request, res: Response) => {
    const { guestId } = req.params;
    res.send(`Current bookings for guest with ID: ${guestId}`);
});

// Get past visits for a guest
router.get('/:guestId/past-visits', (req: Request, res: Response) => {
    const { guestId } = req.params;
    res.send(`Past visits for guest with ID: ${guestId}`);
});

// Get billing details for a guest
router.get('/:guestId/billing', (req: Request, res: Response) => {
    const { guestId } = req.params;
    res.send(`Billing details for guest with ID: ${guestId}`);
});

export default router;






