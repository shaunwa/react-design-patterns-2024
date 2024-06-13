import { useState } from 'react';

export const usePersistentState = (key, defaultValue) => {
    const [state, setState] = useState(JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue)));


    const setStatePersistent = (newValue) => {
        setState(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    }

    return [state, setStatePersistent];
}