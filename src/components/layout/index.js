import React from 'react';
import { Main, Inner } from '../../theming/styles';
import Nav from '../nav';
import Foot from '../foot';
import Content from '../content';
import { Spread } from '../switch/styles';
import ProjContent from '../content/ProjContent';

const Layout = ({
    toggleDarkMode,
    darkMode,
    spread,
    layoutType,
    heading,
    description,
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
            <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            {layoutType === 'proj' ? (
                <ProjContent heading={heading} description={description} />
            ) : (
                <Content
                    style={{
                        zIndex: 20,
                        display: 'block',
                        position: 'relative',
                        mixBlendMode: 'difference',
                    }}
                    darkMode={darkMode}
                />
            )}

            <Foot />
        </Main>
    );
};

export default Layout;
