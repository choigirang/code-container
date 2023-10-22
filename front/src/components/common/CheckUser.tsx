import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { WriteContext } from "../../provider/WriteProvider";
import { BsPencilSquare } from "react-icons/bs";
import { VscTerminalPowershell } from "react-icons/vsc";
import { keyframes, styled } from "styled-components";

/**
 * 비밀번호를 입력받아 Auth Context 값을 바꿈
 * 펜 아이콘을 눌러 Input Context 값을 바꿈
 * @returns Context에 따라 유저 확인, 게시글 작성이 가능한 함수
 */
export function CheckUser() {
  // 계정 확인
  const { user, setUser } = useContext(AuthContext);
  // 계정 확인 입력창
  const [openInput, setOpenInput] = useState<boolean>(false);
  // 게시글 작성
  const { write, setWrite } = useContext(WriteContext);

  // 코드 입력 핸들러
  const submitInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const inputValue = e.currentTarget.value;

      // 입력된 코드 확인
      if (inputValue === process.env.REACT_APP_SUPER_ACCOUNT) {
        setUser(true);
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
      {user ? (
        <BsPencilSquare className="icons" onClick={() => setWrite(!write)} />
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
