const express = require("express");
const router = express.Router()


router.get("/", (req, res) => {
    res.send("TheseTools API");
});

module.exports = router;