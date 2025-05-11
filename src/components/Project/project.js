import QUERIES, { Heading2, Paragraph, Midi } from '../../theming/styles';
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
        margin: 20px 0 10px;
        background-image: url(${image});
        width: 100%;
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 25px;

        @media (${QUERIES.large}) {
            height: 500px;
            margin-bottom: 45px;
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
            <Midi style={{ marginTop: 0, marginBottom: 0 }}>

                <ImageProj />
                <Heading2
                    style={{
                        textAlign: 'left',
                    }}
                    onMouseDown={(e) => {
                        e.preventDefault();
                    }}
                >
                    <Link to={`/${url}`}>{name}</Link>
                </Heading2>

                <Paragraph style={{ marginTop: 0 }}>
                    {description}
                </Paragraph>
            </Midi>
            </Link>
        </Project>
    );
};

export { Project };