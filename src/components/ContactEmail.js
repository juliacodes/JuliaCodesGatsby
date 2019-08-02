import React, { Component } from "react";
import styled from "styled-components/macro";
import { Link } from "gatsby";

const Email = styled.div`
  color: black;
  font-weight: 700;
  padding-bottom: 5px;
  border-bottom: 2px solid black;
  display: inline-block;
`;

function ContactEmail() {
  return (
    <>
      <Link to="mailto:">
        <Email>juliajohnson@purdue.edu</Email>
      </Link>
    </>
  );
}

export default ContactEmail;
