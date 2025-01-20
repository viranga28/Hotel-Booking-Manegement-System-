import React, { useState } from 'react';
import DatePicker from './DatePicker';

const BookingForm = ({ hotel }) => {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [bookingError, setBookingError] = useState(null);

    const handleBookingSubmit = async (event) => {
        event.preventDefault();
        setBookingError(null);

        if (!checkInDate || !checkOutDate) {
            setBookingError("Please select both check-in and check-out dates.");
            return;
        }

        try {
            console.log("Booking submitted:", { checkInDate, checkOutDate, hotel });
            alert("Booking feature is not implemented yet in this demo.");
        } catch (error) {
            console.error("Booking error:", error);
            setBookingError("An error occurred during booking.");
        }
    };

    return (
        <div className="booking-form">
            <h3>Book Your Stay at {hotel.name}</h3>
            <form onSubmit={handleBookingSubmit}>
                <label htmlFor="checkin">Check-in:</label>
                <DatePicker selectedDate={checkInDate} onChange={setCheckInDate} />

                <label htmlFor="checkout">Check-out:</label>
                <DatePicker selectedDate={checkOutDate} onChange={setCheckOutDate} />

                {bookingError && <p className="error-message">{bookingError}</p>}
                <button type="submit" className="booking-button">Book Now</button>
            </form>
        </div>
    );
};

export default BookingForm;
