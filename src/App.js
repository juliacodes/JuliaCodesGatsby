import React from 'react';
import { useDarkMode } from './hooks';
import { ThemeProvider } from 'styled-components';
import lightTheme, { darkTheme } from './theming/themeContext';
import GlobalStyles from './theming/global';
import { AppWrapper, DevopsPage, EA1, Landing, Movie, VulnPage, Scheduler, MarketingSite } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    const [
        mode,
        toggleMode,
        spread,
        componentMounted,
        setDisableScroll,
    ] = useDarkMode();
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
                                    setDisableScroll={setDisableScroll}
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
                                <VulnPage
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
                                <DevopsPage
                                    spread={spread}
                                    mode={mode}
                                    toggleMode={toggleMode}
                                />
                            </AppWrapper>
                        }
                    />

                    <Route
                        path='/ea1'
                        element={
                            <AppWrapper>
                                <EA1
                                    spread={spread}
                                    mode={mode}
                                    toggleMode={toggleMode}
                                />
                            </AppWrapper>
                        }
                    />
                    <Route
                        path='/schedule'
                        element={
                            <AppWrapper>
                                <Scheduler
                                    setDisableScroll={setDisableScroll}
                                    spread={spread}
                                    mode={mode}
                                    toggleMode={toggleMode}
                                />
                            </AppWrapper>
                        }
                    />
                    <Route
                        path='/marketing-site'
                        element={
                            <AppWrapper>
                                <MarketingSite   
                                    setDisableScroll={setDisableScroll}  
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
