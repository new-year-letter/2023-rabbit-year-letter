import { useNavigate } from "react-router-dom";
import ButtonItem from "../components/ButtonItem";
import Container from "../components/container/Container";
import { RabbitContainer } from "../components/container/RabbitContainer";
import { Content, Focus, Title } from "../components/Content";
import Logo from "../components/Logo";
import { Wrapper } from "../components/Wrapper";

const ErrorPage = () => {
  return <div>404 Not Found</div>;
};

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo />
      <Wrapper gap={3.0}>
        <RabbitContainer />
        <Wrapper>
          <Title>
            <Focus>404 Page Not Found</Focus>
          </Title>
          <Content>
            페이지가 존재하지 않거나, 사용하지 않는 페이지입니다. 주소가
            정확한지 다시 확인해주세요!
          </Content>
        </Wrapper>
        <ButtonItem onClick={() => navigate("/")}>메인으로 돌아가기</ButtonItem>
      </Wrapper>
      <Wrapper />
    </Container>
  );
};
