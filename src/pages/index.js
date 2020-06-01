import React, { useState } from 'react';
import { GlobalStyles } from '../reset.css.js';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../theme';
import Layout from '../components/layout';
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
            <Layout>main</Layout>
        </ThemeProvider>
    );
};

export default App;
