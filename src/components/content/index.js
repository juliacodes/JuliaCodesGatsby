import React from 'react';
import { Midi, Heading, Full, Inner, Image } from '../../theming/styles';
import Awk1 from '../../images/Awkward1.jpg';
const Content = () => {
    return (
        <>
            <Midi>
                <Heading>
                    Hi, I'm <alt>Julia.</alt> Front End Developer, and Intern at
                    IBM.
                </Heading>
            </Midi>
            <Full>
                <Image src={Awk1} />
            </Full>
        </>
    );
};

export default Content;
