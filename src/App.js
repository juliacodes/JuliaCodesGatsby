import React from 'react';
import { useDarkMode } from './hooks';
import { ThemeProvider } from 'styled-components';
import lightTheme, { darkTheme } from './theming/themeContext';
import GlobalStyles from './theming/global';
import { Landing } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    const [mode, toggleMode, spread, componentMounted] = useDarkMode();
    if (!componentMounted) {
        return <div />;
    }
    return (
        <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path='/'
                        element={
                            <Landing
                                spread={spread}
                                mode={mode}
                                toggleMode={toggleMode}
                            />
                        }
                    />
                    <Route
                        exact
                        path='/project'
                        element={<h1>project page</h1>}
                    />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export { App };
