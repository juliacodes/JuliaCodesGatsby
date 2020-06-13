import React from 'react';
import Nav from '../../components/nav';
import Foot from '../../components/foot';

const Layout = ({ toggleTheme }) => {
    return (
        <main>
            <div className='inner'>
                <Nav toggleTheme={toggleTheme} />
                <section></section>
                <Foot />
            </div>
        </main>
    );
};

export default Layout;
