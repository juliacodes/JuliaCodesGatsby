import React from 'react';
import { NavCont } from './styles';
import { Inner } from '../../theming/styles';
import Logo from '../logo';
import Switch from '../switch';

const Nav = ({ toggleTheme, theme }) => {
    return (
        <Inner>
            <NavCont>
                <Logo />
                <Switch theme={theme} toggleTheme={toggleTheme} />
            </NavCont>
        </Inner>
    );
};

export default Nav;
