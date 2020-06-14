import React from 'react';
import Card from '../card';
import { CardWrapper } from './styles';
import ibmWhite from '../../images/comps/ibm-white.png';
import awkWhite from '../../images/comps/awk-white.png';
import proofWhite from '../../images/comps/proof-white.png';

const Cards = (props) => {
    return (
        <CardWrapper>
            <Card
                img={ibmWhite}
                title='Front End Intern'
                comp='IBM'
                time="May '20 - present"
                location='Austin, TX'
            />
            <Card
                img={awkWhite}
                title='Front End Intern'
                comp='Awkward'
                time="May - Aug '19"
                location='Rotterdam, NL'
            />
            <Card
                img={proofWhite}
                title='Wordpress Dev'
                comp='Proof Digital'
                time="May '18 - May '19"
                location='Indianapolis, IN'
            />
        </CardWrapper>
    );
};

export default Cards;
