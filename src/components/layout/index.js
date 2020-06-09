import React from 'react';
import Nav from '../../components/nav';
import Foot from '../../components/foot';
import { ThemeContext } from '../../theming/themeContext';

const Layout = ({ children }) => {
    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                <main>
                    <div className='inner'>
                        <Nav />
                        <section>{children}</section>
                        <Foot />
                    </div>
                </main>
            )}
        </ThemeContext.Consumer>
    );
};

export default Layout;
