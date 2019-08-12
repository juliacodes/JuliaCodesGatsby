import styled from "styled-components/macro";

const Paragraph = styled.p`
  margin: 50px 0;
  color: #696969;
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 184.69%;
  /* or 30px */
  letter-spacing: 0.03em;

  a {
    border-bottom: 2px solid transparent;
    transition: 0.3s;

    :hover {
      border-bottom: 2px solid black;
    }
  }
`;

export default Paragraph;
