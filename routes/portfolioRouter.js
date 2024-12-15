const express = require('express');
const portfolioController = require("../controllers/portfolioController");

const router = express.Router();

router.get("/", portfolioController.getProfile);

module.exports = router;