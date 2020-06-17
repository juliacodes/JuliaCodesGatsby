import React from 'react';
import Card from '../card';
import { CardWrapper } from './styles';
import ibmWhite from '../../images/comps/ibm-white.png';
import ibmDark from '../../images/comps/ibm-dark.png';
import awkWhite from '../../images/comps/awk-white.png';
import awkDark from '../../images/comps/awk-dark.png';
import proofWhite from '../../images/comps/proof-white.png';
import proofDark from '../../images/comps/proof-dark.png';

const Cards = ({ theme }) => {
    return (
        <CardWrapper>
            <Card
                img={theme === 'light' ? ibmWhite : ibmDark}
                title='Front End Intern'
                comp='IBM'
                time="May '20 - present"
                location='Austin, TX'
            />
            <Card
                img={theme === 'light' ? awkWhite : awkDark}
                title='Front End Intern'
                comp='Awkward'
                time="May - Aug '19"
                location='Rotterdam, NL'
            />
            <Card
                img={theme === 'light' ? proofWhite : proofDark}
                title='Wordpress Dev'
                comp='Proof Digital'
                time="May '18 - May '19"
                location='Indianapolis, IN'
            />
        </CardWrapper>
    );
};

export default Cards;
