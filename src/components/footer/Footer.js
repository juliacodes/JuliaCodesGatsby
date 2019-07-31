import React from "react";
import Button from "../../components/Button";
import styled from "styled-components/macro";

const FooterCont = styled.div`
  width: 100%;
  padding: 80px;
  background-color: white;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;

const CenterCTA = styled.div`
  padding: 0;
  width: 100%;
  flex: 1 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  background-position: center center;

  h3 {
    text-align: center;
    max-width: 250px;
    margin: 30px auto 20px auto;
    text-align: left;
    font-family: "Lato", sans-serif;
    font-size: 28px;
    line-height: 128.95%;
    font-weight: 800;
    letter-spacing: -0.025em;
  }
`;

const CenterButton = styled.div`
  margin: 0 auto;
`;

function Footer() {
  return (
    <FooterCont>
      <CenterCTA>
        <h3>Want to learn more?</h3>
        <CenterButton>
          <Button>Let's Chat</Button>
        </CenterButton>
      </CenterCTA>
    </FooterCont>
  );
}

export default Footer;
