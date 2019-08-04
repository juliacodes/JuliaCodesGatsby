import React from "react";
import styled from "styled-components/macro";

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
      <a href="mailto: juliajohnson@purdue.edu">
        <Email>juliajohnson@purdue.edu</Email>
      </a>
    </>
  );
}

export default ContactEmail;
