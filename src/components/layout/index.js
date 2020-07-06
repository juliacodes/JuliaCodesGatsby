import React from 'react';
import { Main, Inner } from '../../theming/styles';
import Nav from '../nav';
import Foot from '../foot';
import Content from '../content';
import { Spread } from '../switch/styles';
import ProjContent from '../content/ProjContent';

const Layout = ({
    toggleTheme,
    theme,
    spread,
    layoutType,
    heading,
    description
}) => {
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
            {layoutType === 'proj' ? (
                <ProjContent heading={heading} description={description} />
            ) : (
                <Content
                    style={{
                        zIndex: 20,
                        display: 'block',
                        position: 'relative',
                        mixBlendMode: 'difference'
                    }}
                    theme={theme}
                />
            )}

            <Foot />
        </Main>
    );
};

export default Layout;
