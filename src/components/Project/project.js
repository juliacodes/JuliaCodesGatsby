import QUERIES, { Heading3, Paragraph, Midi } from '../../theming/styles';
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
        margin-bottom: 18px;
        width: 100%;
        height: 290px;
        border-radius: 25px;
        border: 1px solid ${props => props.theme.outline};
        position: relative;
        overflow: hidden;
        @media (${QUERIES.large}) {
            height: 290px;
        }

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url(${image});
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 20% 0%;
            transition: filter 0.3s ease;
            @media (${QUERIES.large}) {
                background-position: center;
            }
        }

        &::after {
            content: 'Open';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 16px;
            font-weight: 300;
            opacity: 0;
            transition: opacity 0.3s ease;
            letter-spacing: -.01em;
            background-color:rgba(255, 255, 255, 0.16);
            padding: 4px 10px;
            border-radius: 20px;
        }
    `;

    const Project = styled.div`
        padding: 0 0 40px 0;
        margin: 0;
        width: 100%;
        @media (${QUERIES.large}) {
            padding: 15px 0 13px;
        }

        &:hover ${ImageProj}::before {
            filter: blur(8px);
        }

        &:hover ${ImageProj}::after {
            opacity: .6;
        }
    `;

    return (
        <Project>
            <Link to={`/${url}`} tabIndex='-1'>
                <ImageProj />
                <Heading3
                    style={{
                        textAlign: 'left',
                        margin: 0,
                        padding: 0,
                    }}
                    onMouseDown={(e) => {
                        e.preventDefault();
                    }}
                >
                    <Link to={`/${url}`}>{name}</Link>
                </Heading3>

                <Paragraph style={{ marginTop: '-4px' }}>
                    {description}
                </Paragraph>
            </Link>
        </Project>
    );
};

export { Project };