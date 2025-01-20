import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const MyDatePicker = ({ selectedDate, onChange }) => {
    return (
        <DatePicker
            selected={selectedDate}
            onChange={onChange}
            dateFormat="yyyy-MM-dd"
            selectsRange
            startDate={selectedDate}
            endDate={selectedDate}
            minDate={new Date()}
        />
    );
};

export default MyDatePicker;
