import styled from "styled-components";

export const Wrapper = styled.div<{ gap?: number }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ gap = 1 }) => gap * 18}px;
`;
