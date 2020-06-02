import React from 'react';
import { NavCont } from './styles';
import Logo from '../logo';
import Switch from '../switch';

const Nav = (props) => {
    return (
        <NavCont>
            <Logo />
            <Switch onClick={props.changeTheme} />
        </NavCont>
    );
};

export default Nav;
