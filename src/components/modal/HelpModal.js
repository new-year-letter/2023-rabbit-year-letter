import ButtonItem from "../ButtonItem";
import { Content, Focus, Title } from "../Content";
import { ModalContainer } from "./Component";

function HelpModal({ setModalOpen }) {
  const closeModal = () => setModalOpen(false);
  return (
    <ModalContainer>
      <Title>안녕하세요!</Title>

      <Content>
        주변 지인에게 내 편지함을 공유하고, 새해 편지와 용돈을 받으세요.
      </Content>
      <Content>
        받은 편지는
        <Focus> 2023년 1월 1일에 개봉</Focus>할 수 있구요.
      </Content>

      <Content>
        <Focus>내 화면 꾸미기를 클릭</Focus>해서, 내 토끼를 예쁘게 꾸며보세요!
        꾸민 토끼는 편지함에서도 볼 수 있어요.
      </Content>
      <ButtonItem onClick={closeModal}>닫 기</ButtonItem>
    </ModalContainer>
  );
}

export default HelpModal;
