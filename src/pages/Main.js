import React from "react";

import styled from "styled-components";

import { useSelector } from "react-redux";

import LogoutMain from "./Main/LogoutMain";
import LoginMain from "./Main/LoginMain";
import { SITE_NAME } from "../utils/constant";
import setMetaTags from "../utils/meta";

function Main() {
  React.useEffect(() => {
    setMetaTags(`메인 - ${SITE_NAME}`);
  }, []);

  const { isLogin } = useSelector((state) => state.loginState);

  return isLogin ? <LoginMain /> : <LogoutMain />;
}

export const Contour = styled.div`
  width: 100%;
  height: 2px;

  background: var(--brown-100);
`;
export default Main;
