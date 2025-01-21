const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    location: String,
    price: Number,
    images: [String],
    amenities: [String],
}, { timestamps: true }); // Add timestamps

module.exports = mongoose.model('Hotel', hotelSchema);
