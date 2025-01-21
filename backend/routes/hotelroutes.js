const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');

// @route   GET api/hotels
// @desc    Get all hotels
// @access  Public
router.get('/', async (req, res) => {
    try {
        const hotels = await Hotel.find({}); // Find all hotels
        res.json(hotels); // Send the hotels as JSON
    } catch (err) {
        console.error("Error fetching hotels:", err.message); // Log the error to the console
        res.status(500).json({
            message: 'Server Error' // Send a generic error message to the client
        });
    }
});

// @route   GET api/hotels/:id
// @desc    Get a hotel by ID
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id); // Find hotel by ID

        if (!hotel) { // Check if the hotel exists
            return res.status(404).json({
                message: 'Hotel not found'
            }); // Send a 404 if not found
        }

        res.json(hotel); // Send the hotel as JSON
    } catch (err) {
        console.error("Error fetching hotel:", err.message);

        if (err.kind === 'ObjectId') { // Check if the error is due to an invalid ObjectId
            return res.status(404).json({
                message: 'Hotel not found'
            }); // Still return a 404 if the ObjectId is invalid
        }

        res.status(500).json({
            message: 'Server Error'
        }); // Send a generic 500 error for other errors
    }
});

module.exports = router;
