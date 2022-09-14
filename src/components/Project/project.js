import QUERIES, { Heading, Paragraph, Midi } from '../../theming/styles';
import { Movie } from '../../images';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Project = ({
    name = 'Project Name',
    description = 'Passionate about facilitating excellent user experiences through site speed optimization, accessibility, and user testing. ',
    url = 'project',
    image = Movie,
}) => {
    const ImageProj = styled.div`
        margin: 20px 0;
        background-image: url(${image});
        width: 100%;
        height: 400px;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;

        @media (${QUERIES.large}) {
            height: 1100px;
        }
    `;

    const Project = styled.div`
        padding: 0 20px;
        @media (${QUERIES.large}) {
            padding: 0;
        }
        width: 100%;
    `;

    return (
        <Link to={`/${url}`}>
            <Project>
                <Midi style={{ marginTop: 0, marginBottom: 40 }}>
                    <Heading
                        style={{
                            textAlign: 'left',
                            fontSize: 60,
                            marginLeft: 0,
                            marginRight: 0,
                            width: 'fit-content',
                            maxWidth: 1000,
                        }}
                    >
                        {name}
                    </Heading>

                    <Paragraph style={{ maxWidth: 650, marginTop: 20 }}>
                        {description}
                    </Paragraph>
                </Midi>
                <ImageProj />
            </Project>
        </Link>
    );
};

export { Project };
