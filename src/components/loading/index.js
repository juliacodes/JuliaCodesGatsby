import React from "react";
import styled from "styled-components";
import { TypeAnimation } from "../../theming/animate";

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.div`
  height: 30px;
  width: 30px;
  background-color: black;
  border-radius: 100%;
  margin: 0 5px;
  animation: ${TypeAnimation} 0.5s ${(p) => p.delay}
    cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export default function Loading() {
  return (
    <Page>
      <Container>
        <Circle delay="0.3s" />
        <Circle delay="0.6s" />
        <Circle delay="0.9s" />
      </Container>
    </Page>
  );
}
