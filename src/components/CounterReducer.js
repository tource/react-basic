import React, { useReducer } from "react";

const reducer = (state, action) => {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const CounterReducer = () => {
  // useReducer의 첫 번째 파라미터에는 해당 리듀서 함수, 두 번째 파라미터에는 해당 리듀서의 기본값
  // useReducer Hook을 사용하면 state 값과 sipatch 함수를 받아온다.
  // state: 현재 상태
  // dispatch: 액션을 발생시키는 함수
  // dispatch(action)과 같은 형태로, 함수 안에 파라미터로 액션 값을 넣어주면 리듀서함수가 호출되는 구조다
  // useReducer의 큰 장접 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다.
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  //   return (
  //     <div>
  //       <p>
  //         현재 카운터 값은 <b>{state.value}</b>입니다.
  //       </p>
  //       <button onClick={() => dispatch({ type: "INCREMENT" })}>1 증가</button>
  //       <button onClick={() => dispatch({ type: "DECREMENT" })}>1 감소</button>
  //     </div>
  //   );
};

export default CounterReducer;
