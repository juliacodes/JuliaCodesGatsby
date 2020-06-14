import React from 'react';
import { CardContainer, CompLogo, Description } from './styles';

const Card = (props) => {
    return (
        <CardContainer>
            <CompLogo
                style={{ backgroundImage: `url(${props.img})` }}
            ></CompLogo>
            <Description>
                <p>{props.title}</p>
                <p>{props.comp}</p>
                <p>{props.time}</p>
                <p>{props.location}</p>
            </Description>
        </CardContainer>
    );
};

export default Card;
