import React from 'react';
import { NavCont } from './styles';
import { Inner } from '../../theming/styles';
import { Logo } from '../logo';
import { Switch } from '../switch';

const Nav = ({ toggleMode, mode, spread }) => {
    return (
        <Inner
            style={{
                mixBlendMode: 'difference',
            }}
        >
            <NavCont
                style={{
                    mixBlendMode: 'difference',
                }}
            >
                <Logo
                    style={{
                        position: 'relative',
                        display: 'block',
                        zIndex: 2,
                    }}
                />
                <Switch spread={spread} mode={mode} toggleMode={toggleMode} />
            </NavCont>
        </Inner>
    );
};

export { Nav };
