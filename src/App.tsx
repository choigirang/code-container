import React from "react";
import Background from "./components/common/Background";
import StackBox from "./components/common/StackBox";
import { styled } from "styled-components";
import { Provider } from "react-redux";
import store from "./redux/store/store";

function App() {
  return (
    <Provider store={store}>
      <BasicApp>
        <StackBox />
        <Background />
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
`;

export default App;
