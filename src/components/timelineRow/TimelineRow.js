import React from "react";
import styled from "styled-components/macro";

const Row = styled.div`
  width: 100%;
  margin-top: 50px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;

const LeftTriad = styled.div`
  flex: 100%;

  @media (min-width: 900px) {
    flex: 30%;
  }
`;

const CenterTriad = styled.div`
  flex: 100%;

  @media (min-width: 900px) {
    flex: 30%;
  }
`;
const RightTriad = styled.div`
  flex: 100%;

  @media (min-width: 900px) {
    flex: 30%;
  }
`;

const TimelineText = styled.div`
  margin: 0 0 100px 0;

  @media (min-width: 900px) {
    margin: 0;
  }
  h2 {
    max-width: 250px;
    margin: 30px auto;
    text-align: left;
    font-family: "Lato", sans-serif;
    font-size: 28px;
    line-height: 128.95%;
    font-weight: 800;
    letter-spacing: -0.025em;
    margin-bottom: 30px;
  }

  p {
    max-width: 250px;
    margin: 10px auto;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 156.19%;
    margin-bottom: 30px;
    color: #5e5e5e;
    letter-spacing: 0.03em;
  }
`;

const Timeline = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
  position: relative;

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: orange;
    position: absolute;
    top: -5px;
    left: calc(50% - 125px);
  }
`;
function TimelineRow() {
  return (
    <Row>
      <LeftTriad>
        <Timeline />
        <TimelineText>
          <h2>
            Growing <br />
            Passion.
          </h2>
          <p>
            Integer non elementum sem, vel convallis erat. Integer non elementum
            sem, vel convallis erat.
          </p>
        </TimelineText>
      </LeftTriad>
      <CenterTriad>
        <Timeline />
        <TimelineText>
          <h2>
            Expanding <br />
            Knowledge.
          </h2>
          <p>
            Integer non elementum sem, vel convallis erat. Integer non elementum
            sem, vel convallis erat.
          </p>
        </TimelineText>
      </CenterTriad>
      <RightTriad>
        <Timeline />
        <TimelineText>
          <h2>
            Gaining <br />
            Experience.
          </h2>
          <p>
            Integer non elementum sem, vel convallis erat. Integer non elementum
            sem, vel convallis erat.
          </p>
        </TimelineText>
      </RightTriad>
    </Row>
  );
}

export default TimelineRow;
