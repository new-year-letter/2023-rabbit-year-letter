// src/main/frontend/src/App.js

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import axios from "axios";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CreateAccount from "./pages/CreateAccount";
import MyPage from "./pages/MyPage";
import LetterBox from "./pages/LetterBox";
import InviteLetter from "./pages/InviteLetter";
import SendLetter from "./pages/SendLetter";
import ReadLetter from "./pages/ReadLetter";
import Custom from "./pages/Custom";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <CreateAccount />,
      },
      {
        path: "mypage",
        element: <MyPage />,
      },
      {
        path: "custom",
        element: <Custom />,
      },
      {
        path: "letter-box",
        element: <LetterBox />,
        children: [
          {
            path: ":id",
            element: <ReadLetter />,
          },
        ],
      },
      {
        path: "letter:uuid",
        element: <InviteLetter />,
        children: [
          {
            path: "send",
            element: <SendLetter />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  /** moblie에서 viewpoint가 제대로 나오지 않는 현상을 수정하는 함수 */
  const setScreenSize = (): void => {
    const vh: number = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  /** React 프로젝트 전역에서 axios를 설정하기 위한 함수 */
  const setAxios = (): void => {
    // node.js 환경에서 API URL을 불러온 후, 전역에서 axios의 baseURL 설정
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
    // CORS 인증을 위해 인증 정보를 포함시켜 요청
    axios.defaults.withCredentials = true;
  };

  useEffect(() => {
    setScreenSize();
    setAxios();
  });

  return <RouterProvider router={router} />;
};

export default App;
