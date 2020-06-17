import React from 'react';
import { Main } from '../../theming/styles';
import Nav from '../../components/nav';
import Foot from '../../components/foot';
import Content from '../../components/content';

const Layout = ({ toggleTheme, theme }) => {
    return (
        <Main>
            <Nav theme={theme} toggleTheme={toggleTheme} />
            <Content theme={theme} />
            <Foot />
        </Main>
    );
};

export default Layout;
