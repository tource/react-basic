# 6. Hooks

## 6.1 useState

```js
import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value} 입니다.</b>
      </p>
      <button onClick={() => setValue(value + 1)}>1 증가</button>
      <button onClick={() => setValue(value - 1)}>1 감소</button>
    </div>
  );
};

export default Counter;
```

## 6.2 useEffect

- 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
- 기본구조

```js
useEffect(()=>{},[의존성 배열])
```

### 6.2.1 마운트될 때만 실행하고 싶을 때

- 의존성 배열 빈배열

### 6.2.2 특정 값이 업데이트될 때만 실행하고 싶을 때

- 의존성 배열 안에 검사하고 싶은 값을 넣어주면 됨

### 6.2.3 뒷정리하기

- 참고: 컴포넌트의 라이프사이클

  - 모든 리액트 컴포넌트에는 라이프사이클(생명주기)이 존재
  - 컴포넌트의 수명은 페이지에 렌더링되기 전인 준비과정에서 시작하여 페이지에서 사라질 때 끝난다.
  - 가끔 컴포넌트를 처음으로 렌더링할 때나 컴포넌트를 업데이트하기 전후로 어떤 작업을 처리해야할 수도 있다.
  - 또한 불필요한 업데이트를 방지해야 할 수도 있다.
  - 라이프사이클 메서드는 클래스형 컴포넌트에서만 사용가능
  - 함수형 컴포넌트에서는 Hooks 기능을 사용하여 비슷한 작업을 처리
  - 마운트(mount): DOM이 생성되고 웹 브라우저 상에 나타나는 것
  - 업데이트(update)

    - 컴포넌트는 다음 같은 총 네 가지 경우 업데이트한다.
    - props가 바뀔 때
    - state가 바뀔 때
    - 상위 컴포넌트가 리렌더링될 때

  - 언마운트(unmount): 컴포넌트를 DOM에서 제거하는 것

  - useEffect는 기본적으로 렌더링되고 난 직후마다 실행된다.
  - 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라진다.
  - 컴포넌트가 언마운트 되기 전이나 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면 cleanUp 함수를 반환해주어야 한다.
  - 렌더링 될 때마다 뒷정리 함수가 계속 나타난것을 확인 할 수 있다.
  - 뒷정리 함수가 호출될 때는 업데이트 직전의 값을 보여준다.

  ```js
  import React, { useEffect, useState } from "react";

  const Counter = () => {
    console.log("카운터 컴포넌트 렌더링");

    const [value, setValue] = useState(0);

    useEffect(() => {
      console.log("effect");
      console.log(value);
    }, [value]);

    return (
      <div>
        <p>
          현재 카운터 값은 <b>{value} 입니다.</b>
        </p>
        <button onClick={() => setValue(value + 1)}>1 증가</button>
        <button onClick={() => setValue(value - 1)}>1 감소</button>
      </div>
    );
  };

  export default Counter;
  ```

  - 오직 언마운트될 때만 뒷정리 함수를 호출하고 싶다면 useEffect 함수에 빈배열을 넣으면 된다.

  ```js
  useEffect(() => {
    console.log("effect");
    console.log(value);
    return () => {
      console.log("cleanup");
      console.log(value);
    };
  }, []);
  ```

## 6.3 useReducer

### 기본이해

- 커피숍에 비유 해볼께요
- 액션타입 : 커피숍의 메뉴 (아메리카노, 라떼, 카푸치노, 아이스티 ...)
- 액션생성함수 : 주문서 작성 (아메리카노 하나랑 라떼 하나 주세요)
  - 페이로드 : 주문서 작성 (아메리카노는 **샷추가**, 라떼 우유는 **두유**로 바꿔주세요)
- 디스패치함수 : 주문하기
- 리듀서함수 : 바리스타, 주문 받은걸 만들고 가공해서 손님에게 내 준다.

- useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 해주고 싶을 때 사용하는 Hook
- 리듀서는 현재상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션(action)값을 전달 받아 새로운 상태를 반환하는 함수
- 리듀서 함수에서 새로운 상태를 만들 때는 반드시 불변성을 지켜 주어야 한다.

### 6.3.1 카운터 구현하기

- src/components/CounterReducer.js

```js
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
  // useReducer의 첫 번째 파라미터에는 리듀서 함수, 두 번째 파라미터에는 해당 리듀서의 기본값
  // useReducer Hook을 사용하면 state 값과 dispatch 함수를 받아온다.
  // state: 현재 상태
  // dispatch: 액션을 발생시키는 함수
  // dispatch(action)과 같은 형태로, 함수 안에 파라미터로 액션 값을 넣어주면 리듀서함수가 호출되는 구조
  // useReducer의 큰 장점 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다.
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>1 증가</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>1 감소</button>
    </div>
  );
};

export default CounterReducer;
```

### 6.3.2 input 상태 관리하기

- useReducer에서의 액션은 그 어떤 값도 사용 가능하다.
- 그래서 e.target 값 자체를 액션 값으로 사용해보자.

- src/components/InputReducer.js

```js
import React, { useReducer } from "react";

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const InputReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    username: "",
    nickname: "",
  });

  const { username, nickname } = state;

  const onChange = e => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="username"
          value={username}
          onChange={onChange}
        />
        <br />
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={onChange}
        />
      </div>
      <div>
        <b>이름:</b> {username}
      </div>
      <div>
        <b>닉네임:</b> {nickname}
      </div>
    </div>
  );
};

export default InputReducer;
```
