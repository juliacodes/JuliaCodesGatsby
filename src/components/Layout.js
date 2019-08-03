import styled from "styled-components/macro";
import { breakpoints } from "../components/Media";

const Layout = styled.div`
  min-height: 100vh;
  padding: 20px;
  margin: 25px auto;

  a {
    text-decoration: none;
    color: black;
  }

  @media (min-width: ${breakpoints.tabletMin}) {
    max-width: 940px;
    padding: 20px;
    margin: 75px auto;
  }

  @media (min-width: ${breakpoints.desktopMin}) {
    max-width: 1200px;
    padding: 20px;
    margin: 75px auto;
  }
`;

export default Layout;
