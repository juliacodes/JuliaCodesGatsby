import styled, { keyframes } from 'styled-components';
import { Lock, Error } from '../../images';
import QUERIES from '../../theming/styles';

export const Sending = keyframes`
from {
  transform-origin: 50% 50%;
  transform:  rotate(45deg) translateX(0px);
}
to {
  transform-origin: initial;
  transform: scale(2) translateX(100vw);
}
`;

export const Shake = keyframes`
0% {
  transform: translateX(0px);
}
16.6% {
  transform: translateX(3px);
}

33.3% {
  transform: translateX(0px);
}
50% {
  transform: translateX(-3px);
}
66.6%{
  transform: translateX(0px);
}
83.3%{
  transform: translateX(3px);
}
100%{
  transform: translateX(0px);
}
`;

export const FormCont = styled.div`
    max-width: 400px;
    margin: calc(50vh - 60px) auto;
    background-color: ${({ theme }) => theme.main};
    border-radius: 20px;

    @media (${QUERIES.small}) {
        width: 400px;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.formGray} inset !important;
    }

    *:focus {
        outline: none;
        border: 1px solid ${({ theme }) => theme.grayText};
    }

    ::before {
        content: '';
        width: calc(100vw - 140px);
        max-width: 300px;
        height: 50px;
        position: absolute;
        top: 27px;
        left: 10vw;
        box-shadow: ${({ theme }) => theme.formShadow};
        @media (${QUERIES.small}) {
            width: 350px;
            left: 35px;
        }
    }
    .form-error {
        border: 1px solid #e4453a;
    }
    .error-anim {
        animation: ${Shake} linear 0.2s;
    }
    .error-icon::after {
        content: '';
        position: absolute;
        display: inline-block;
        top: 27px;
        right: 135px;
        width: 25px;
        height: 25px;
        background-size: cover;
        background-color: transparent;
        background-repeat: no-repeat;
        background-position: center center;
        background-image: url(${Error});
        z-index: 99;
        @media (${QUERIES.small}) {
            right: 70px;
        }
    }
    #form {
        width: calc(100vw - 70px);
        max-width: 400px;
        padding: 15px 0;
        background-color: ${({ theme }) => theme.main};
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        position: relative;
        border-radius: 20px;
        @media (${QUERIES.small}) {
            width: 400px;
        }
        .sent {
            animation: ${Sending} ease-in-out 3s;
            position: relative;
            display: inline-block;
        }
    }
    #email {
        background-color: ${({ theme }) => theme.formGray};
        padding: 10px 15px;
        font-weight: normal;
        font-size: 18px;
        line-height: 165.69%;
        border-radius: 13px;
        width: 230px;
        color: ${({ theme }) => theme.textMain};
        ::placeholder {
            color: ${({ theme }) => theme.textGray};
        }
        @media (${QUERIES.small}) {
            width: 330px;
        }
    }
    #submit {
        width: 30px;
        height: 30px;
        background-size: fit;
        background-color: transparent;
        background-repeat: no-repeat;
        background-position: center center;
        background-image: url(${Lock});
        transition-duration: 0.4s;
    }
`;

export const Button = styled.button`
    content: '';
    width: 30px;
    height: 30px;
    background-size: fit;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${Lock});
    transition-duration: 0.4s;
`;
export const slide = keyframes`
from {
  transform: translateX(0px);
}
to {
  transform: translateX(-100%);
}
`;

export const slideRev = keyframes`
from {
  transform: translateX(-80%);
}
to {
  transform: translateX(0);
}
`;
