import React, { useState } from "react";
import Background from "./components/common/Background";
import StackBox from "./components/common/StackBox";
import { styled } from "styled-components";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { VscTerminalPowershell } from "react-icons/vsc";

function App() {
  const [superUser, setSuperUser] = useState<boolean>(false);
  const [openInput, setOpenInput] = useState<boolean>(false);

  const submitInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const inputValue = e.currentTarget.value;
      if (inputValue === process.env.REACT_APP_SUPER_ACCOUNT) {
        setSuperUser(true);
        setOpenInput(false);
      }
    }
  };

  return (
    <Provider store={store}>
      <BasicApp>
        {/* 스택 리스트 & 선택한 스택에 따른 목록 */}
        <StackBox />
        <Background />
        {/* 코드 입력 시 작성 화면으로 */}
        {openInput && (
          <InputEle
            placeholder="입력 후 Enter를 누르세요."
            onKeyDown={submitInput}
          />
        )}
        <VscTerminalPowershell
          className="icons"
          onClick={() => setOpenInput(!openInput)}
        />
      </BasicApp>
    </Provider>
  );
}

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
`;

export default App;
