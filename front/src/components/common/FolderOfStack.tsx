import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { api } from "../../util/api";
import { styled } from "styled-components";
import { ApiStackData } from "../../type/aboutRedux";

type ContainerProps = {
  $displayOpt: undefined | ApiStackData[];
};

export default function FolderOfStack() {
  const [apiStack, setApiStack] = useState<ApiStackData[] | undefined>(
    undefined
  );
  const stack = useSelector((state: RootState) => state.stack.stack);

  useEffect(() => {
    const dataOfStack = api.get("");
    !dataOfStack && setApiStack(undefined);
  }, [stack]);

  return (
    <Container $displayOpt={apiStack}>
      {!apiStack && <NoneData>데이터가 없습니다.</NoneData>}
      {/* {apiStack?.map()} */}
    </Container>
  );
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  display: ${(props) => (props.$displayOpt ? "grid" : "flex")};
`;

// 데이터 없을 시
const NoneData = styled.div`
  width: 100%;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
