import React from 'react';
import { CardContainer, CompLogo, Description } from './styles';

const Card = (props) => {
    return (
        <CardContainer>
            <CompLogo
                src={props.img}
                // style={{ backgroundImage: `url(${props.img})` }}
            ></CompLogo>
        </CardContainer>
    );
};

export default Card;
