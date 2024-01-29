import { useReducer, useEffect } from 'react';
import { fetchAPI } from '../../utils/API';

const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

function timesReducer(state, action) {
    switch (action.type) {
        case 'setTimes':
            return action.payload;
        default:
            throw new Error();
    }
}

const AvailableTimes = () => {
    const [times, dispatch] = useReducer(timesReducer, null, initializeTimes);
    return [times, dispatch];
}

export default AvailableTimes;