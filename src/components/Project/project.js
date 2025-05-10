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
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 100px;

        @media (${QUERIES.large}) {
            height: 700px;
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
        <Project>
            <Link to={`/${url}`} tabIndex='-1'>
                <ImageProj />
            </Link>
            <Midi style={{ marginTop: 40, marginBottom: 0 }}>
                <Heading
                    style={{
                        textAlign: 'left',
                        fontSize: 60,
                        marginLeft: 0,
                        marginRight: 0,
                        width: 'fit-content',
                        maxWidth: 1000,
                    }}
                    onMouseDown={(e) => {
                        e.preventDefault();
                    }}
                >
                    <Link to={`/${url}`}>{name}</Link>
                </Heading>

                <Paragraph style={{ marginTop: 0 }}>
                    {description}
                </Paragraph>
            </Midi>
        </Project>
    );
};

export { Project };
