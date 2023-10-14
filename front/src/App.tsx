import React, { createContext, useState } from "react";
import Background from "./components/common/Background";
import StackBox from "./components/common/StackBox";
import { keyframes, styled } from "styled-components";
import store, { RootState } from "./redux/store/store";
import { VscTerminalPowershell } from "react-icons/vsc";
import { BsPencilSquare } from "react-icons/bs";
import { changeAuthority } from "./redux/actions/authority";
import { changeWrite } from "./redux/actions/write";

const defaultValue = false;

const AppContext = createContext(defaultValue);

function App() {
  const [writeOpen, setWriteOpen] = useState(false);

  const openModal = () => {
    setWriteOpen(true);
  };

  const closeModal = () => {
    setWriteOpen(false);
  };

  return (
    <AppContext.Provider value={writeOpen}>
      <BasicApp>
        {/* 스택 리스트 & 선택한 스택에 따른 목록 */}
        <CheckSuper />
        <StackBox />
        <Background />
      </BasicApp>
    </AppContext.Provider>
  );
}

function CheckSuper() {
  // 계정 확인 입력창
  const [openInput, setOpenInput] = useState<boolean>(false);
  // 계정 확인
  const superUser = useSelector((state: RootState) => state.super.authority);
  // redux 상태
  const dispatch = useDispatch();

  // 코드 입력 핸들러
  const submitInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const inputValue = e.currentTarget.value;

      // 입력된 코드 확인
      if (inputValue === process.env.REACT_APP_SUPER_ACCOUNT) {
        dispatch(changeAuthority(true));
        setOpenInput(false);
        alert("계정 확인 완료");
      } else {
        alert("일치하지 않는 코드입니다.");
      }
    }
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
      {superUser ? (
        <BsPencilSquare
          className="icons"
          onClick={() => dispatch(changeWrite())}
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
