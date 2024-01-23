import React, { useState } from 'react';

const Reservations = () => {
    return (
        <form>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" name="res-date" />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" name="res-time">
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" id="guests" name="guests" min="1" placeholder="1" />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion">
                <option>Anniversary</option>
                <option>Birthday</option>
                <option>Business meal</option>
                <option>Other</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    )
};

export default Reservations;