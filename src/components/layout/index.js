import React from 'react';
import Nav from '../../components/nav';
import Foot from '../../components/foot';

const Layout = ({ children }) => {
    return (
        <main>
            <Nav />
            <section>{children}</section>
            <Foot />
        </main>
    );
};

export default Layout;
