import React from "react";
import Counter from "../components/Counter";
import CounterReducer from "../components/CounterReducer";
import InputReducer from "../components/InputReducer";

const MainPage = () => {
  return (
    <div>
      <h1>Hooks study</h1>
      <div>
        <h2>useState</h2>
        <h3>예시: 카운터 앱</h3>
        {/* <Counter /> */}
      </div>
      <div>
        <h2>useState</h2>
        <h3>예시: 카운터 앱</h3>
        <Counter />
      </div>
      <div>
        <h2>useState</h2>
        <h3>예시: 리듀서 활용 카운터 앱</h3>
        <CounterReducer />
      </div>
      <div>
        <h2>useState</h2>
        <h3>예시: 리듀서 활용 카운터 앱</h3>
        <InputReducer />
      </div>
    </div>
  );
};

export default MainPage;
