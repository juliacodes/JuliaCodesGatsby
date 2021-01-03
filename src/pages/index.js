import React, { useState, useEffect } from 'react';
import GlobalStyles from '../theming/global';
import Layout from '../components/layout';
import { useDarkMode } from '../hooks/useDarkMode';
import { ThemeProvider } from 'styled-components';
import lightTheme, { darkTheme } from '../theming/themeContext';

const App = () => {
    const [mode, toggleMode, componentMounted] = useDarkMode();
    const [spread, setSpread] = useState(true); // will use when fixing spread

    if (!componentMounted) {
        return <div />;
    }
    return (
        <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Layout spread={spread} mode={mode} toggleMode={toggleMode} />
        </ThemeProvider>
    );
};

export default App;
