const express = require('express');
const connectDB = require('./config/db');
const hotelRoutes = require('./routes/hotelRoutes');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Connect to the database
connectDB();

// Enable CORS
app.use(cors());

// Body parser middleware
app.use(express.json({
    extended: false
}));

// Define routes
app.use('/api/hotels', hotelRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
