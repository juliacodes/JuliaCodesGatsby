import QUERIES, { Heading, Paragraph } from '../../theming/styles';
import { CoffeeChemistry } from '../../images';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Project = ({
    name = 'Project Name',
    description = 'Passionate about facilitating excellent user experiences through site speed optimization, accessibility, and user testing. ',
    url = 'project',
    image = CoffeeChemistry,
}) => {
    const ImageProj = styled.div`
        margin: 50px 0;
        background-image: url(${image});
        width: 100%;
        height: 400px;
        background-size: cover;
        background-position: center;

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
            <Link to={`/${url}`}>
                <Heading
                    style={{
                        textAlign: 'left',
                        marginLeft: 0,
                        marginRight: 0,
                        width: '100%',
                        maxWidth: 1000,
                    }}
                >
                    {name}
                </Heading>
            </Link>
            <Paragraph style={{ maxWidth: 650, marginTop: 20 }}>
                {description}
            </Paragraph>
            <ImageProj />
        </Project>
    );
};

export { Project };
