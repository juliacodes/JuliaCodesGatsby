import React from 'react';
import { NavCont } from './styles';
import Logo from '../logo';
import Switch from '../switch';

const Nav = ({ toggleTheme, theme }) => {
    return (
        <NavCont>
            <Logo />
            <Switch theme={theme} toggleTheme={toggleTheme} />
        </NavCont>
    );
};

export default Nav;
