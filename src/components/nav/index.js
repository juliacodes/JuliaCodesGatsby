import React from 'react';
import { NavCont } from './styles';
import { Midi } from '../../theming/styles';
import { Logo } from '../logo';
import { Switch } from '../switch';
import { Link } from 'react-router-dom';

const Nav = ({ toggleMode, mode, spread }) => {
    return (
        <Midi
            style={{
                mixBlendMode: 'difference',
            }}
        >
            <NavCont
                style={{
                    mixBlendMode: 'difference',
                }}
            >
                <Link to='/'>
                    <Logo
                        style={{
                            position: 'relative',
                            display: 'block',
                            zIndex: 2,
                        }}
                    />
                </Link>
                <Switch spread={spread} mode={mode} toggleMode={toggleMode} />
            </NavCont>
        </Midi>
    );
};

export { Nav };
