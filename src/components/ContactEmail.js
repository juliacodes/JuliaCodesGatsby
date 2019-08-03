import React, { Component } from "react";
import styled from "styled-components/macro";
import { Link } from "gatsby";

const Email = styled.div`
  color: black;
  font-weight: 700;
  padding-bottom: 5px;
  border-bottom: 2px solid black;
  display: inline-block;
  transition: border-bottom 0.2s;

  :hover {
    border-bottom: 2px solid transparent;
  }
`;

function ContactEmail() {
  return (
    <>
      <Link to="mailto: juliajohnson@purdue.edu">
        <Email>juliajohnson@purdue.edu</Email>
      </Link>
    </>
  );
}

export default ContactEmail;
