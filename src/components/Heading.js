import styled from "styled-components/macro";
import { breakpoints } from "../components/Media";

const Heading = styled.h1`
  width: 100%;
  font-style: normal;
  font-weight: 900;
  font-size: 33px;
  line-height: 129.69%;
  letter-spacing: 0.03em;

  @media (min-width: ${breakpoints.mobileMax}) {
    font-size: 40px;
    transform: scale(1);
  }

  > span {
    color: #b4e0e8;
  }
`;

export default Heading;
