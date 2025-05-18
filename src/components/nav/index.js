import React from 'react';
import { NavCont, NavLinks } from './styles';
import { Midi } from '../../theming/styles';
import { Logo } from '../logo';
import { Switch } from '../switch';
import { Link, useNavigate } from 'react-router-dom';

const Nav = ({ toggleMode, mode, spread }) => {
    const navigate = useNavigate();
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
                onMouseDown={(e) => {
                    e.preventDefault();
                }}
            >
                <Link
                    to='/'
                    aria-current='page'
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            navigate(`/`);
                        }
                    }}
                    style={{margin: 0, padding: 0, border: 'none', height: '28px'}}
                >
                    <Logo
                        style={{
                            position: 'relative',
                            display: 'block',
                            zIndex: 2,
                        }}
                    />
                </Link>
                {/* <NavLinks>
                    <a href='/'><p className={window.location.pathname === '/' ? 'active' : ''}>Home</p></a>
                    <a href='/about'><p className={window.location.pathname === '/about' ? 'active' : ''}>About</p></a>
                    <a href='/contact'><p className={window.location.pathname === '/contact' ? 'active' : ''}>Contact</p></a>
                </NavLinks> */}
                <Switch spread={spread} mode={mode} toggleMode={toggleMode} />
            </NavCont>
        </Midi>
    );
};

export { Nav };
