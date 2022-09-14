import React from 'react';
import { NavCont } from './styles';
import { Midi } from '../../theming/styles';
import { Logo } from '../logo';
import { Switch } from '../switch';

const Nav = ({ toggleMode, mode, spread }) => {
    return (
        <Midi
            style={{
                mixBlendMode: 'difference',
                marginTop: 80,
                marginBottom: 150,
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
        </Midi>
    );
};

export { Nav };
