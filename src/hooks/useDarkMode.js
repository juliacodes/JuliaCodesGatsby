// useDarkMode.js
import { useEffect, useState } from 'react';

export const useDarkMode = () => {
    const [mode, setMode] = useState('light');
    const [spread, setSpread] = useState(''); // will use when fixing spread

    const [componentMounted, setComponentMounted] = useState(false);

    const toggleMode = () => {
        if (mode === 'light') {
            setSpread('first');
            setTimeout(() => {
                window.localStorage.setItem('MODE', 'dark');
                setMode('dark');
            }, 2000);
        } else {
            setSpread('second');
            setTimeout(() => {
                window.localStorage.setItem('MODE', 'light');
                setMode('light');
            }, 2000);
        }

        console.log(window.localStorage.getItem('MODE'));
    };

    useEffect(() => {
        const localMode = window.localStorage.getItem('MODE');
        if (localMode === undefined || localMode === null) {
            setMode('light');
            window.localStorage.setItem('MODE', 'light');
        } else {
            setMode(localMode);
        }
        setComponentMounted(true);
    }, []);

    return [mode, toggleMode, spread, componentMounted];
};
