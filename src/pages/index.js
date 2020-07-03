import React, { useState } from 'react';
import GlobalStyles from '../theming/global';
import Layout from '../components/layout';
import { ThemeProvider } from 'styled-components';
import lightTheme, { darkTheme } from '../theming/themeContext';

const App = () => {
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
            <Layout spread={spread} theme={theme} toggleTheme={toggleTheme} />
        </ThemeProvider>
    );
};

export default App;
