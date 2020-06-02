import React, { useState } from 'react';
import { GlobalStyles } from '../reset.css.js';
import { ThemeContext, themes } from '../theming/themeContext';
import Layout from '../components/layout';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState((state) => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark,
            }));
        };

        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        };
    }
    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                <GlobalStyles />
                <Layout>main</Layout>
            </ThemeContext.Provider>
        );
    }
}

export default App;
