# 3. useState()

## 3.1 state

- 리액트에서 state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미
- props는 상위 컴포넌트가 설정하는 값
- 컴포넌트 자신은 해당 props를 읽기 전용으로만 사용할 수 있다.
- props 를 바꾸려면 부모 컴포넌트에서 바꾸어 주어야 한다.
- 하위 컴포넌트에서 전달 받은 props 값을 직접 바꿀수 없는데,
- state는 컴포넌트 자체적으로 지닌 값으로 컴포넌트 내부에서 값을 업데이트할 수 있다.

### 3.1.1 usState()

- 리액트 16.8이후 버전에서 사용가능
- 이전 버전에서는 Class state 사용

#### 3.1.1.1 배열구조분해할당

- 배열구조분해할당

```js
const array = [10, 20];
// const one = array[0];
// const two = array[1];

// console.log(one);
// console.log(two);

// 배열구조분해할당
const [one, two] = array;

console.log(one);
console.log(two);
```

#### 3.1.1.2 useState 사용

```js
import React, { useState } from "react";

const Main = () => {
  // useState함수의 인자에 초기값 useState(초기값)
  // useState함수를 호출하면 배열이 반환
  // 배열의 첫 번째 요소는 현재상태 message
  // 두 번째 요소는 상태를 바꿔주는 세터(setter)함수 setMessage
  const [message, setMessage] = useState("");

  const onClickEnter = () => {
    setMessage("안녕하세요!");
  };

  const onClickLeave = () => {
    setMessage("안녕히 가세요!");
  };

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Main;
```

#### 3.1.1.3 한 컴포넌트에서 useState 여러 번 사용하기

```js
import React, { useState } from "react";

const Main = () => {
  // 메세지 상태 변경
  const [message, setMessage] = useState("");
  // 메세지 컬러 상태
  const [color, setColor] = useState("black");

  const onClickEnter = () => {
    setMessage("안녕하세요!");
    setColor("red");
  };

  const onClickLeave = () => {
    setMessage("안녕히 가세요!");
    setColor("black");
  };

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
    </div>
  );
};

export default Main;
```

## 3.2 state를 사용할 때 주의사항

- state 값을 바꾸어야 할 때는 setState 혹은 useState를 통해 전달 받은 세터함수를 사용해야 한다.
- 배열이나 객체를 업데이트해야 할 때

```js
const array = [
  { id: 1, value: true },
  { id: 2, value: true },
  { id: 3, value: false },
  { id: 4, value: true },
  { id: 5, value: false },
  { id: 6, value: true },
];

let nextArray = array.concat({ id: 7 }); // 새 항목 추가
nextArray = nextArray.filter(item => item.id !== 2); // id가 2인 항목 제거
// id가 1인 항목의 valuse를 false로 설정
nextArray = nextArray.map(item =>
  item.id === 1 ? { ...item, value: false } : item,
);

console.log(array);
console.log(nextArray);
```

## 3.3 정리

- props는 상위 컴포넌트가 설정
- state는 컴포넌트 자체적으로 지닌 값으로 컴포넌트 내부에서 값을 업데이트
