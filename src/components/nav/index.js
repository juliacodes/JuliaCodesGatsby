import React, { useEffect } from 'react';
import { NavCont, NavLinks } from './styles';
import { Midi } from '../../theming/styles';
import { Logo } from '../logo';
import { Switch } from '../switch';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Nav = ({ toggleMode, mode, spread }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (location.hash === '#experience') {
            const element = document.getElementById('experience');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

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
                            window.scrollTo({ top: 0, behavior: 'smooth' });
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
                <NavLinks>
                    <Link to="/"><p className={isHome ? "active" : ""}>Home</p></Link>
                    <a href="#case-studies" onClick={(e) => scrollToSection(e, 'case-studies')}><p className={!isHome ? "active" : ""}>Work</p></a>
                    <Link to="/#experience" onClick={(e) => {
                        if (isHome) {
                            e.preventDefault();
                            scrollToSection(e, 'experience');
                        }
                    }}><p>About</p></Link>
                </NavLinks>
                <Switch spread={spread} mode={mode} toggleMode={toggleMode} />
            </NavCont>
        </Midi>
    );
};

export { Nav };
