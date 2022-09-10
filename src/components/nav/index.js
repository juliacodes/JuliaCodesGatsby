import React from 'react';
import { NavCont } from './styles';
import { Full } from '../../theming/styles';
import { Logo } from '../logo';
import { Switch } from '../switch';

const Nav = ({ toggleMode, mode, spread }) => {
    return (
        <Full
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
        </Full>
    );
};

export { Nav };
