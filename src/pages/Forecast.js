import React from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import styled from "styled-components";
import { breakpoints } from "../components/Media";
import Logo from "../components/Logo";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import ContactEmail from "../components/ContactEmail";
import Footer from "../components/footer";
import "../index.css";

const Container = styled.div`
  margin: 100px 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }
`;

const TextContent = styled.div`
  max-width: 800px;

  h1 {
    font-size: 60px;
  }
`;

const ProjectTable = styled.table`
  width: 100%;
  text-align: left;

  th {
    font-style: normal;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 129.69%;
    letter-spacing: 0.03em;
    padding-bottom: 20px;
  }

  td {
    font-size: 16px;
    line-height: 184.69%;
    letter-spacing: 0.03em;
  }
`;

const Bold = styled.td`
  font-size: 16px;
  line-height: 184.69%;
  letter-spacing: 0.03em;
  font-weight: 900;
  color: #dd7834;
`;

function Forecast() {
  return (
    <Layout>
      <Link to="/">
        <Logo />
      </Link>
      <Container>
        <TextContent>
          <Heading>Forecast</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
            pretium magna. Mauris lorem tortor, consectetur vitae tellus vel,
            tempor iaculis turpis. Nunc venenatis nisi nec orci gravida
            consequat vitae et risus. Mauris lorem tortor, consectetur vitae
            tellus vel, tempor iaculis turpis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Duis ac pretium magna. Mauris lorem
            tortor, consectetur vitae tellus vel, tempor iaculis turpis.
          </Paragraph>
          <ProjectTable>
            <tr>
              <th>Type</th>
              <th>Stack</th>
              <th>Code</th>
              <th>Live</th>
            </tr>
            <tr>
              <td>Personal</td>
              <td>React</td>
              <Bold>Repository</Bold>
              <Bold>View Site</Bold>
            </tr>
            <tr>
              <td></td>
              <td>GraphQL</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>Netlify</td>
              <td></td>
              <td></td>
            </tr>
          </ProjectTable>
        </TextContent>
      </Container>
    </Layout>
  );
}

export default Forecast;
