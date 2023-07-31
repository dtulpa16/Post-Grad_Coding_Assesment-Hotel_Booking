const express = require("express");
const router = express.Router();

//Sample Guest data
const guests = require("../data/Guests.json")

router.get('/', (req, res) => {
    res.json(guests);
});


module.exports = router;