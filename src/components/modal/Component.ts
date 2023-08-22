import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 400px;

  z-index: 999;

  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);

  background: white;
  border-radius: 12px;
  border: 1px solid var(--pink-100);
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media (max-width: 400px) {
    width: 90%;
  }
`;
