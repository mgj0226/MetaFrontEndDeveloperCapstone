import React, { useState} from 'react';

const Reservations = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" name="res-date" onChange={e => setDate(e.target.value)} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" name="res-time" onChange={e => setTime(e.target.value)}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" id="guests" name="guests" min="1" placeholder="1" onChange={e => setGuests(e.target.value)}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" onChange={e => setOccasion(e.target.value)}>
                <option>Anniversary</option>
                <option>Birthday</option>
                <option>Business meal</option>
                <option>Other</option>
            </select>
            <input type="submit" value="Make Your reservation" onSubmit={handleSubmit}/>
        </form>
    )
};

export default Reservations;
