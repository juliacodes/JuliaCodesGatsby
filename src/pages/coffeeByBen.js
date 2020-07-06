import React, { useState } from 'react';
import GlobalStyles from '../theming/global';
import Layout from '../components/layout';
import { ThemeProvider } from 'styled-components';
import lightTheme, { darkTheme } from '../theming/themeContext';

const CoffeeByBen = () => {
    const [theme, setTheme] = useState('light');
    const [spread, setSpread] = useState(false);

    function toggleTheme() {
        if (theme === 'light') {
            setSpread('first');
            setTimeout(() => {
                setTheme('dark');
            }, 2000);
        } else {
            setSpread('second');
            setTimeout(() => {
                setTheme('light');
            }, 2000);
        }
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Layout
                layoutType='proj'
                heading='Coffee By Benjamin'
                description='Decore is a project I built alongside Ian Trent, for a class project. We decided to create a react web application that would help other developers get started with their web projects. Decore allows users to customize a layout setup that will generate custom html and css code that can be used as a starter template for any website.'
                spread={spread}
                theme={theme}
                toggleTheme={toggleTheme}
            />
        </ThemeProvider>
    );
};

export default CoffeeByBen;
