import React, { useEffect } from 'react';
import { useDarkMode } from './hooks';
import { ThemeProvider } from 'styled-components';
import lightTheme, { darkTheme } from './theming/themeContext';
import GlobalStyles from './theming/global';
import { AppWrapper, Devops, Landing, Movie, Vuln } from './pages';
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
                            <AppWrapper>
                                <Landing
                                    spread={spread}
                                    mode={mode}
                                    toggleMode={toggleMode}
                                />
                            </AppWrapper>
                        }
                    />
                    <Route
                        path='/movie'
                        element={
                            <AppWrapper>
                                <Movie
                                    spread={spread}
                                    mode={mode}
                                    toggleMode={toggleMode}
                                />
                            </AppWrapper>
                        }
                    />
                    <Route
                        path='/vuln'
                        element={
                            <AppWrapper>
                                <Vuln
                                    spread={spread}
                                    mode={mode}
                                    toggleMode={toggleMode}
                                />
                            </AppWrapper>
                        }
                    />
                    <Route
                        path='/devops'
                        element={
                            <AppWrapper>
                                <Devops
                                    spread={spread}
                                    mode={mode}
                                    toggleMode={toggleMode}
                                />
                            </AppWrapper>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export { App };
