import React, { Component } from "react";
import logosvg from "../images/Logo.svg";
import styled from "styled-components/macro";

const LogoImg = styled.div`
  position: relative;
  background-image: url(${logosvg});
  width: 34px;
  height: 32px;
  background-repeat: no-repeat;

  /* ::after {
    opacity: 0;
    z-index: -2;
    content: "";
    display: inline-block;
    position: absolute;
    width: 60px;
    height: 60px;
    top: -10px;
    left: -10px;
    border-radius: 30px;
    background-color: black;
    transition-duration: 0.2s;
  }

  :hover ::after {
    opacity: 1;
  }

  svg > g > g > .LogoMain{
    fill: white;
  }

  :hover{
      color: white;
  } */
`;
function Logo() {
  return <LogoImg />;
}

export default Logo;
