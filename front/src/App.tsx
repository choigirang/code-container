import React, { createContext, useCallback, useContext, useState } from "react";
import Background from "./components/common/Background";
import StackBox from "./components/common/StackBox";
import { keyframes, styled } from "styled-components";
import store, { RootState } from "./redux/store/store";
import { VscTerminalPowershell } from "react-icons/vsc";
import { BsPencilSquare } from "react-icons/bs";
import { changeAuthority } from "./redux/actions/authority";
import { changeWrite } from "./redux/actions/write";
import { Provider } from "react-redux";

type DefaultValue = {
  writeOpen: boolean;
  setWriteOpen: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuth: boolean;
  setCheckAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<DefaultValue>({
  writeOpen: false,
  setWriteOpen: () => {},
  checkAuth: false,
  setCheckAuth: () => {},
});

export const Example1Context = createContext({ user: "choi", age: 0 });
export const Example2Context = createContext<
  React.Dispatch<React.SetStateAction<{ user: string; age: number }>>
>(() => {});

function App() {
  const [writeOpen, setWriteOpen] = useState<boolean>(false);
  const [checkAuth, setCheckAuth] = useState<boolean>(false);
  const [user, setUser] = useState({ user: "", age: 0 });

  const setUserCallback: React.Dispatch<
    React.SetStateAction<{ user: string; age: number }>
  > = (newUser) => {
    setUser((prevUser) => ({ ...prevUser, ...newUser }));
  };
  return (
    <Provider store={store}>
      <AppContext.Provider
        value={{
          writeOpen,
          setWriteOpen,
          checkAuth,
          setCheckAuth,
        }}
      >
        <Example1Context.Provider value={user}>
          <Example2Context.Provider value={setUserCallback}>
            <BasicApp>
              <CheckSuper />
              <StackBox />
              <Background />
            </BasicApp>
          </Example2Context.Provider>
        </Example1Context.Provider>
      </AppContext.Provider>
    </Provider>
  );
}

function CheckSuper() {
  const { writeOpen, setWriteOpen, checkAuth, setCheckAuth } =
    useContext(AppContext);
  const { user, age } = useContext(Example1Context);
  const setUser = useContext(Example2Context);

  // 계정 확인 입력창
  const [openInput, setOpenInput] = useState<boolean>(false);
  // 계정 확인

  // 코드 입력 핸들러
  const submitInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, age: 25 }));
    // if (e.key === "Enter") {
    //   const inputValue = e.currentTarget.value;

    //   // 입력된 코드 확인
    //   if (inputValue === process.env.REACT_APP_SUPER_ACCOUNT) {
    //     setCheckAuth(true);
    //     setOpenInput(false);
    //     alert("계정 확인 완료");
    //   } else {
    //     alert("일치하지 않는 코드입니다.");
    //   }
    // }
  };

  return (
    <div>
      {/* 아이콘 클릭 시 코드 입력창 */}
      {openInput && (
        <InputEle
          placeholder="입력 후 Enter를 누르세요."
          onKeyDown={submitInput}
          type="password"
        />
      )}
      {/* 코드 입력 아이콘 || 게시글 작성 아이콘 */}
      {checkAuth ? (
        <BsPencilSquare
          className="icons"
          onClick={() => setWriteOpen(!writeOpen)}
        />
      ) : (
        <VscTerminalPowershell
          className="icons"
          onClick={() => setOpenInput(!openInput)}
        />
      )}
    </div>
  );
}

const animateBorder = keyframes`
  0% {
    border-color: #00bd00;
  }
  50% {
    border-color: #216700;
  }
  100% {
    border-color: #00bd00;
  }
`;

const BasicApp = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 calc((100% - 1500px) / 2);

  .icons {
    position: absolute;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: auto;
    color: white;
    cursor: pointer;
  }
`;

const InputEle = styled.input`
  background-color: white;
  position: absolute;
  width: 200px;
  height: 100px;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: solid 2px #00bd00;
  border-radius: 3px;
  animation: ${animateBorder} 2s linear infinite;
`;

export default App;
