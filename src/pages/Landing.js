import React from 'react';
import { Main, Midi, Heading, Full, Image } from '../theming/styles';

import { Nav, Foot, Split, FullWidthProj, SplitSkills } from '../components';
import { Spread } from '../components/switch/styles';
import { Awk1, Julia, computerImage } from '../images';

const Landing = ({ toggleMode, mode, spread }) => {
    const spreadClass =
        spread === 'first'
            ? 'growBlack'
            : spread === 'second'
            ? 'growWhite'
            : '';

    return (
        <Main style={{ position: 'relative' }}>
            <Spread className={spreadClass} />
            <Nav mode={mode} toggleMode={toggleMode} />
            <Midi style={{ mixBlendMode: 'difference' }}>
                <Heading
                    style={{
                        mixBlendMode: 'difference',
                        color: 'white',
                    }}
                >
                    Hi, I'm Julia.
                    <br /> I'm a UI/UX Engineer at IBM
                </Heading>
            </Midi>
            <Full>
                <Image style={{ backgroundImage: `url(${Awk1})` }} />
            </Full>
            <Midi>
                <Split
                    paragraph={
                        <>
                            I'm a software engineer with 3+ years experience,
                            specializing in UI design and development. I have a
                            strong comprehension of design process and I'm
                            well-versed in the best practices of web design and
                            implementation.
                            <br />
                            <br />I have Experience as a UI/UX lead, where I
                            implemented industry standard design principles and
                            processes to improve customer experience. Looking to
                            leverage my design and development expertise to
                            transition into a lead UI Engineer role, where I can
                            bridge the gap between engineers and designers.
                        </>
                    }
                />
            </Midi>
            <Full style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Image
                    style={{
                        backgroundImage: `url(${computerImage})`,
                        width: 'calc(40% - 30px)',
                    }}
                />
                <Image
                    style={{
                        backgroundImage: `url(${Julia})`,
                        width: '60%',
                    }}
                />
            </Full>
            <Midi>
                <SplitSkills />
            </Midi>

            <Full>
                <FullWidthProj />
            </Full>
            <Foot />
        </Main>
    );
};

export { Landing };
