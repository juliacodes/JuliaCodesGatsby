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

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100; // Adjust based on your nav height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const hash = location.hash?.replace('#', '');
    if (hash) {
      setTimeout(() => scrollTo(hash), 0); // ensures DOM is ready
    }
  }, [location]);

  return (
    <Midi style={{ mixBlendMode: 'difference' }}>
      <NavCont>
        <Link to="/" style={{ margin: 0, padding: 0, border: 'none', height: '28px' }}>
          <Logo style={{ position: 'relative', display: 'block' }} />
        </Link>

        <NavLinks>
          <Link to="/">
            <p className={isHome ? 'active' : ''}>Home</p>
          </Link>

          <button
            onClick={() => {
              if (!isHome) {
                navigate('/#case-studies');
              } else {
                scrollTo('case-studies');
              }
            }}
            className={!isHome ? 'active' : ''}
          >
            Work
          </button>

          <button
            onClick={() => {
              if (!isHome) {
                navigate('/#experience');
              } else {
                scrollTo('experience');
              }
            }}
          >
            About
          </button>
        </NavLinks>

        <Switch spread={spread} mode={mode} toggleMode={toggleMode} />
      </NavCont>
    </Midi>
  );
};

export { Nav };
