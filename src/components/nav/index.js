import React from 'react';
import { NavCont } from './styles';
import Logo from '../logo';
import Switch from '../switch';

const Nav = () => {
    return (
        <NavCont>
            <Logo />
            <Switch />
        </NavCont>
    );
};

export default Nav;
