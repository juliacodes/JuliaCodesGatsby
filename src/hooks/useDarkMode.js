// useDarkMode.js
import { useEffect, useState } from 'react';

const useDarkMode = () => {
    const [mode, setMode] = useState('light');
    const [spread, setSpread] = useState('');
    const [disableScroll, setDisableScroll] = useState(false);
    const [componentMounted, setComponentMounted] = useState(false);

    const changeMode = (newMode) => {
        setDisableScroll(true);
        setSpread(newMode === 'dark' ? 'first' : 'second');
        
        setTimeout(() => {
            setMode(newMode);
            setDisableScroll(false);
        }, 2000);
    };

    const toggleMode = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        window.localStorage.setItem('MODE', newMode);
        changeMode(newMode);
    };

    useEffect(() => {
        // Check for saved user preference
        const savedMode = window.localStorage.getItem('MODE');
        
        // Get system preference
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const systemMode = systemPrefersDark ? 'dark' : 'light';

        // Use saved preference if it exists, otherwise use system preference
        const initialMode = savedMode || systemMode;
        setMode(initialMode);

        // Set up listener for system preference changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        const handleChange = (e) => {
            // Only update if there's no saved user preference
            if (!window.localStorage.getItem('MODE')) {
                const newMode = e.matches ? 'dark' : 'light';
                changeMode(newMode);
            }
        };

        // Add the event listener
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleChange);
        } else {
            // For older browsers
            mediaQuery.addListener(handleChange);
        }

        setComponentMounted(true);

        // Cleanup
        return () => {
            if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener('change', handleChange);
            } else {
                // For older browsers
                mediaQuery.removeListener(handleChange);
            }
        };
    }, []);

    return [mode, toggleMode, spread, componentMounted, disableScroll];
};

export { useDarkMode };
