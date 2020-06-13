import React, { useState } from 'react';
import { GlobalStyles } from '../theming/global';
import Layout from '../components/layout';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../theming/themeContext';

const App = () => {
    const [theme, setTheme] = useState('light');

    function toggleTheme() {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Layout toggleTheme={toggleTheme} />
        </ThemeProvider>
    );
};

export default App;
