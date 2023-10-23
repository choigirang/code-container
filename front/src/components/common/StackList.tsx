import { styled } from "styled-components";
import { frontend, backend } from "../../constant/stackList";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { SelectDataContext } from "../../provider/SelectDataProvider";

type StackProp = {
  $stack: boolean;
};

/**
 * 좌측 목록으로 constan의 스택 목록을 보여줄 컴포넌트
 * StackBox의 하위 컴포넌트
 * @returns 클릭한 Stack을 context에 저장하여, 해당하는 데이터를 반환
 */
export default function StackList() {
  const {
    stack: selectedStack,
    setStack,
    data,
  } = useContext(SelectDataContext);

  // 선택한 데이터의 카테고리(스택)
  const selectedDataOfStack = data && data.stack;

  // context 선택한 stack 저장하기
  const handleSelectStack = (stack: string) => {
    setStack(stack);
  };

  // 스택 모음
  const stacks = {
    FRONTEND: frontend,
    BACKEND: backend,
  };

  // 스택 항목 렌더링
  const renderStackItems = (
    stackType: string,
    stackList: { [key: string]: string }
  ) => {
    return Object.keys(stackList).map((stack) => (
      <StackItem
        key={stack}
        onClick={() => handleSelectStack(stack)}
        $stack={selectedStack === stack || selectedDataOfStack === stack}
      >
        {stackList[stack]}
      </StackItem>
    ));
  };

  // 각각의 스택 목록을 렌더링
  return (
    <Container>
      {Object.entries(stacks).map(([stackType, stackList]) => (
        <div key={stackType}>
          <Title>{stackType}</Title>
          <DividStack>{renderStackItems(stackType, stackList)}</DividStack>
        </div>
      ))}
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
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.$stack ? "rgba(255, 255, 255, 0.5)" : "none"};
  font-weight: ${(props) => (props.$stack ? "700" : "300")};
  padding: 10px;
  font-size: 18px;
  transition: all 0.3s;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
