import React from 'react';
import Nav from '../../components/nav';
import Foot from '../../components/foot';

const Layout = ({ toggleTheme, theme }) => {
    return (
        <main>
            <div className='inner'>
                <Nav theme={theme} toggleTheme={toggleTheme} />
                <section></section>
                <Foot />
            </div>
        </main>
    );
};

export default Layout;
