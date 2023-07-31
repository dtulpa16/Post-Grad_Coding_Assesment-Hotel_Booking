const express = require("express");
const router = express.Router();

//Sample Room data
const rooms = require("../data/Rooms.json")

router.get('/', (req, res) => {
    res.json(rooms);
});

module.exports = router;