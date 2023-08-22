import { useSelector } from "react-redux";
import styled from "styled-components";
import { BACKGROUND_OPTION } from "../../utils/constant";
import React from "react";

type ContainerProps = {
  customBg?: number;
  children?: React.ReactNode;
};

function Container({ customBg, children }: ContainerProps) {
  const { background } = useSelector(
    (state: { infoState: { background: number } }) => state.infoState
  );

  return (
    <BackgroundContainer>
      <Content
        background={
          customBg !== undefined
            ? BACKGROUND_OPTION[customBg]
            : background !== undefined
            ? BACKGROUND_OPTION[background]
            : BACKGROUND_OPTION[0]
        }
      >
        {children}
      </Content>
    </BackgroundContainer>
  );
}

const BackgroundContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 380px;
  max-width: 100vw;
  min-height: 100vh;
  height: auto;
`;

const Content = styled.div<{ background: string }>`
  min-width: 380px;
  max-width: 500px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 54px;
  align-items: center;
  gap: 36px;

  color: var(--brown);

  background: url(${({ background }) => background});
  background-repeat: repeat;
  background-size: cover;

  @media (max-height: 560px) {
    height: auto;
  }

  @media (min-width: 500px) {
    width: 500px;
  }

  @media (max-width: 500px) {
    width: 100%;
    padding: 54px 27px;
  }
`;
export default Container;
