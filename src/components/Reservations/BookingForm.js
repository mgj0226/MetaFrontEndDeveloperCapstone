import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import AvailableTimes from './AvailableTimes';

const initialState = {
    date: '',
    time: '',
    guests: '',
    occasion: '',
};

function reducer(state, action) {
    switch (action.type) {
        case 'setDate':
            return { ...state, date: action.payload };
        case 'setTime':
            return { ...state, time: action.payload };
        case 'setGuests':
            return { ...state, guests: action.payload };
        case 'setOccasion':
            return { ...state, occasion: action.payload };
        default:
            throw new Error();
    }
}

const BookingForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [availableTimes, timesDispatch] = AvailableTimes();
    const today = new Date().toISOString().split('T')[0];

    const handleDateChange = (e) => {
        dispatch({ type: 'setDate', payload: e.target.value });
        timesDispatch({ type: 'setTimes', payload: ["18:00", "19:00", "20:00"] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className='bookingForm'>
            <label htmlFor="res-date">Choose date:</label>
            <input type="date" id="res-date" name="res-date" onChange={handleDateChange} min={today} required/>
            <label htmlFor="res-time" required>Choose time:</label>
            <select id="res-time" name="res-time" onChange={e => dispatch({ type: 'setTime', payload: e.target.value })}>
                {availableTimes.map(time => <option key={time}>{time}</option>)}
            </select>
            <label htmlFor="guests">Number of guests:</label>
            <input type="number" id="guests" name="guests" min="1" placeholder="1" onChange={e => dispatch({ type: 'setGuests', payload: e.target.value })}/>
            <label htmlFor="occasion">Occasion:</label>
            <select id="occasion" name="occasion" onChange={e => dispatch({ type: 'setOccasion', payload: e.target.value })}>
                <option>Anniversary</option>
                <option>Birthday</option>
                <option>Business meal</option>
                <option>Other</option>
            </select>
            <Link to="/Confirmed"><input type="submit" value="Make Your reservation" className='submitBtn'/></Link>
        </form>
    );
};

export default BookingForm;