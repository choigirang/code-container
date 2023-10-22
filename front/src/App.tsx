import Background from "./components/common/Background";
import StackBox from "./components/common/StackBox";
import { styled } from "styled-components";

import { AppProvider } from "./provider/AppProvider";
import AuthProvider from "./provider/AuthProvider";
import WriteProvider from "./provider/WriteProvider";
import { CheckUser } from "./components/common/CheckUser";

function App() {
  return (
    <AppProvider contexts={[AuthProvider, WriteProvider]}>
      <BasicApp>
        <CheckUser />
        <StackBox />
        <Background />
      </BasicApp>
    </AppProvider>
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

export default App;
