import React from 'react';
import { NavCont } from './styles';
import Logo from '../logo';
import Switch from '../switch';

const Nav = ({ toggleTheme }) => {
    return (
        <NavCont>
            <Logo />
            <Switch toggleTheme={toggleTheme} />
        </NavCont>
    );
};

export default Nav;
