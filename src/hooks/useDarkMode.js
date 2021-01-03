// useDarkMode.js
import { useEffect, useState } from 'react';

export const useDarkMode = () => {
    const [mode, setMode] = useState('light');
    const [componentMounted, setComponentMounted] = useState(false);

    const toggleMode = () => {
        if (mode === 'light') {
            window.localStorage.setItem('MODE', 'dark');
            setMode('dark');
        } else {
            window.localStorage.setItem('MODE', 'light');
            setMode('light');
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

    return [mode, toggleMode, componentMounted];
};
