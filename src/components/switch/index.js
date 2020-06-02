import React from 'react';
import { SwitchBtn } from './styles';
import { ThemeContext } from '../../theming/themeContext';

const Switch = () => {
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <SwitchBtn onClick={toggleTheme}>
                    <svg
                        style={{ marginTop: '3px' }}
                        width='19'
                        height='19'
                        viewBox='0 0 19 19'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M2.04572e-07 12.4083C1.73373 13.0809 3.62564 13.2349 5.44533 12.8515C7.26503 12.4682 8.93398 11.5639 10.249 10.249C11.5639 8.93398 12.4682 7.26503 12.8515 5.44534C13.2349 3.62564 13.0809 1.73373 12.4083 0C14.4908 0.811575 16.2245 2.32483 17.3102 4.27848C18.3959 6.23214 18.7654 8.50357 18.3548 10.7006C17.9442 12.8976 16.7794 14.8823 15.0615 16.3121C13.3435 17.7418 11.1803 18.5268 8.94523 18.5316C7.01062 18.5321 5.12106 17.9476 3.52465 16.8548C1.92823 15.762 0.699579 14.212 2.04572e-07 12.4083V12.4083Z'
                            fill={theme.lines}
                        />
                    </svg>
                </SwitchBtn>
            )}
        </ThemeContext.Consumer>
    );
};

export default Switch;
