import { styled } from "styled-components";
import { frontend, backend } from "../../constant/stackList";
import { useDispatch, useSelector } from "react-redux";
import { selectStack } from "../../redux/actions/stack";
import { RootState } from "../../redux/store/store";

type StackProp = {
  stack: boolean;
};

export default function StackList() {
  // 선택한 스택
  const selectedStack = useSelector((state: RootState) => state.stack.stack);

  // 스택 모음
  const frontStack = frontend;
  const backStack = backend;

  // 스택 선택
  const dispatch = useDispatch();

  // redux 선택한 stack 저장하기
  const handleSelectStack = (stack: string) => {
    dispatch(selectStack(stack));
  };
  return (
    <Container>
      {/* 프론트엔드 목록 */}
      <Title>FRONTEND</Title>
      <DividStack>
        {Object.keys(frontStack).map((stack) => (
          <StackItem
            key={stack}
            onClick={() => handleSelectStack(stack)}
            stack={selectedStack === stack}
          >
            {frontStack[stack]}
          </StackItem>
        ))}
      </DividStack>
      {/* 백엔드 목록 */}
      <Title>BACKEND</Title>
      <DividStack>
        {Object.keys(backStack).map((stack) => (
          <StackItem
            key={stack}
            onClick={() => handleSelectStack(stack)}
            stack={selectedStack === stack}
          >
            {backStack[stack]}
          </StackItem>
        ))}
      </DividStack>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  color: white;
  border-right: solid 3px rgba(255, 255, 255, 0.4);
`;

// 스택 목록
const DividStack = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.p`
  width: 100%;
  height: 30px;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  font-size: 21px;
  font-weight: bold;
  border: solid 2px green;
  border-radius: 3px;
`;

// 개별 스택
const StackItem = styled.li<StackProp>`
  width: 100%;
  min-height: 50px;
  background-color: ${(props) =>
    props.stack ? "rgba(255, 255, 255, 0.5)" : null};
  padding: 10px;
  font-size: 18px;
  transition: all 0.3s;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
