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

function Forecast() {
  return (
    <Layout>
      <Link to="/">
        <Logo />
      </Link>
    </Layout>
  );
}

export default Forecast;
