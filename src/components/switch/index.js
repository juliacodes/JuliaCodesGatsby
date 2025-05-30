import React from 'react';
import { SwitchBtn } from './styles';

const Switch = ({ toggleMode, mode, spread }) => {
    return (
        <SwitchBtn
            onMouseDown={(e) => {
                e.preventDefault();
                toggleMode();
            }}
            onClick={toggleMode}
        >
            {mode === 'light' ? (
                <svg
                    width='10   '
                    height='10  '
                    viewBox='0 0 14 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M-7.82013e-05 9.058C1.26554 9.54903 2.64663 9.66146 3.975 9.38159C5.30338 9.10172 6.52171 8.44163 7.48163 7.48171C8.44155 6.52179 9.10164 5.30345 9.38151 3.97508C9.66138 2.64671 9.54895 1.26562 9.05792 0C10.5781 0.592448 11.8438 1.69712 12.6363 3.12328C13.4289 4.54945 13.6986 6.20759 13.3989 7.81141C13.0992 9.41523 12.2489 10.8641 10.9948 11.9078C9.74067 12.9515 8.16151 13.5245 6.52992 13.528C5.11765 13.5284 3.73828 13.1017 2.5729 12.3039C1.40753 11.5062 0.510612 10.3747 -7.82013e-05 9.058Z'
                        fill='black'
                    />
                </svg>
            ) : (
                <svg
                    width='14'
                    height='14'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M5.82949 9.99984C5.82949 12.3007 7.70116 14.1723 10.002 14.1723C12.3028 14.1723 14.1745 12.3007 14.1745 9.99984C14.1745 7.699 12.3028 5.82734 10.002 5.82734C7.70116 5.82734 5.82949 7.699 5.82949 9.99984ZM9.16699 15.8332H10.8337V18.3332H9.16699V15.8332ZM9.16699 1.6665H10.8337V4.1665H9.16699V1.6665ZM1.66699 9.1665H4.16699V10.8332H1.66699V9.1665ZM15.8337 9.1665H18.3337V10.8332H15.8337V9.1665Z'
                        fill='black'
                    />
                    <path
                        d='M4.69738 16.4817L3.51904 15.3034L5.28654 13.5359L6.46488 14.7142L4.69738 16.4817Z'
                        fill='black'
                    />
                    <path
                        d='M13.5352 5.28664L15.3035 3.51831L16.4818 4.69664L14.7135 6.46498L13.5352 5.28664Z'
                        fill='black'
                    />
                    <path
                        d='M5.28654 6.46595L3.51904 4.69762L4.69821 3.51929L6.46488 5.28762L5.28654 6.46595Z'
                        fill='black'
                    />
                    <path
                        d='M16.4818 15.3032L15.3035 16.4816L13.5352 14.7132L14.7135 13.5349L16.4818 15.3032Z'
                        fill='black'
                    />
                </svg>
            )}
        </SwitchBtn>
    );
};

export { Switch };
