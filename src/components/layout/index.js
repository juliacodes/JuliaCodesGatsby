import React from 'react';
import { Main, Inner } from '../../theming/styles';
import Nav from '../../components/nav';
import Foot from '../../components/foot';
import Content from '../../components/content';
import { Spread } from '../../components/switch/styles';

const Layout = ({ toggleTheme, theme, spread }) => {
    return (
        <Main style={{ position: 'relative' }}>
            <Spread
                className={
                    spread === 'first'
                        ? 'growBlack'
                        : spread === 'second'
                        ? 'growWhite'
                        : ''
                }
            />
            <Nav theme={theme} toggleTheme={toggleTheme} />
            <Content
                style={{
                    zIndex: 20,
                    display: 'block',
                    position: 'relative',
                    mixBlendMode: 'difference'
                }}
                theme={theme}
            />
            <Foot />
        </Main>
    );
};

export default Layout;
