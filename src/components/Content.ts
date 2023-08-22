import styled from "styled-components";

export const Content = styled.div`
  font-family: nanumRound;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
  word-break: keep-all;
  text-align: center;
`;

export const Title = styled(Content)`
  font-size: 24px;
`;

export const Focus = styled.span`
  color: var(--pink);
`;

export const SubTitle = styled(Content)`
  font-size: 18px;
`;
