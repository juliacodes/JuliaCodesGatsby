import React from 'react';
import { useDarkMode } from './hooks';
import { ThemeProvider } from 'styled-components';
import lightTheme, { darkTheme } from './theming/themeContext';
import GlobalStyles from './theming/global';
import { Landing } from './pages';

const App = () => {
    const [mode, toggleMode, spread, componentMounted] = useDarkMode();
    if (!componentMounted) {
        return <div />;
    }
    return (
        <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Landing spread={spread} mode={mode} toggleMode={toggleMode} />
        </ThemeProvider>
    );
};

export { App };
