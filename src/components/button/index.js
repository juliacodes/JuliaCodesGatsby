import React from 'react';
import { ButtonCont, ButtonContMini } from './styles';

const ButtonA = (props) => {
    return (
        <ButtonCont>
            <>{props.title}</>
        </ButtonCont>
    );
};

export const ButtonMini = (props) => {
    return (
        <ButtonContMini>
            <>{props.title}</>
            <svg
                width='25'
                height='25'
                viewBox='0 0 25 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M3.02267 11.0834H17.7192L12.3861 5.75027L13.8108 4.32556L21.5762 12.0909L13.8108 19.8563L12.3861 18.4316L17.7192 13.0985H3.02267V11.0834Z'
                    fill='black'
                />
            </svg>
        </ButtonContMini>
    );
};

export default ButtonA;
