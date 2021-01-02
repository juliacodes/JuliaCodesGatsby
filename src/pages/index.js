import React, { useState, useEffect } from 'react';
import GlobalStyles from '../theming/global';
import Layout from '../components/layout';
import { ThemeProvider } from 'styled-components';
import lightTheme, { darkTheme } from '../theming/themeContext';

const App = () => {
    if (localStorage) {
        const storedDarkMode = localStorage.getItem('DARK_MODE');
    } else {
        const storedDarkMode = false;
    }

    const [darkMode, setDarkMode] = useState(
        localStorage ? storedDarkMode : ''
    );
    const toggleDarkMode = () => setDarkMode(darkMode ? false : true);
    // const theming = localStorage.getItem('THEMING');
    // console.log(localStorage.getItem('THEMING'));
    // const [theme, setTheme] = useState(theming);
    const [spread, setSpread] = useState(false);

    useEffect(() => {
        console.log(`is in dark mode? ${darkMode}`);
        if (localStorage) {
            localStorage.setItem('DARK_MODE', darkMode);
        }
    }, [darkMode]);
    // useEffect(() => {
    //     console.log(`CURRENT MODE:  ${theme}`);
    //     localStorage.setItem('theme', theme);
    // }, [theme]);

    // function toggleTheme() {
    //     if (theme === 'light') {
    //         setSpread('first');
    //         setTimeout(() => {
    //             setTheme('dark');
    //         }, 2000);
    //     } else {
    //         setSpread('second');
    //         setTimeout(() => {
    //             setTheme('light');
    //         }, 2000);
    //     }
    // }

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <Layout
                spread={spread}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
        </ThemeProvider>
    );
};

export default App;
