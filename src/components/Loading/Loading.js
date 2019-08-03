import React from "react";
import styled, { keyframes } from "styled-components";
import { breakpoints } from "../Media";
import logosvg from "../../images/LogoLarge.svg";

const Pulse = keyframes`
  0% {
    opacity: .3;
  }

  50%{
    opacity: 1;
  }

  100% {
    opacity: .3;
  }
`;

const FlyOut = keyframes`
  0% {
    transform: translate(0);
  }

  100% {
    transform: translate(4000px);
  }
`;

const Panel = styled.div`
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${FlyOut} 2s 1.3s ease-in;
`;

const LogoLarge = styled.div`
  flex: 0 0 auto;
  position: relative;
  background-image: url(${logosvg});
  width: 240px;
  transform: scale(0.7);
  height: 220px;
  background-repeat: no-repeat;
  animation: ${Pulse} 1.1s 2 ease-in-out;

  @media (min-width: ${breakpoints.mobileMax}) {
    transform: scale(1);
  }
`;

function Loading() {
  return (
    <Panel>
      <LogoLarge />
    </Panel>
  );
}

export default Loading;
