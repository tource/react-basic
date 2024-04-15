# 1. JSX 문법

## 1.1 감싸인 요소

- JSX 파일(컴포넌트)은 첫글자를 대문자
- <></> Fragment
- src/Main.js

```js
import from "react";

const Main = () => {
  return (
    <>
      <h1>리액트 안녕</h1>
      <h2>리액트 안녕</h2>
    </>
  );
};

export default Main;
```

## 1.2 자바스크립트 표현

- JSX 안에서 자바스크립트 표현식 코드를 {}로 감싸면 된다.

```js
import React from "react";

const Main = () => {
  const title = "React";

  return (
    <>
      <h1>{title} 안녕</h1>
      <h2>{title} 안녕</h2>
    </>
  );
};

export default Main;
```

## 1.3 If문 대신 조건부 연산자(삼향 연산자)

- JSX 내부의 자바스크립트 표현식에서 if문을 사용할 수 없다.
- JSX 밖에서 if문을 사용하여 사전에 값을 설정하거나
- 조건부 연산자(삼향 연산자)를 사용한다.

```js
import React from "react";

const Main = () => {
  const title = "리액트";

  return (
    <>
      {title === "리액트" ? (
        <h1>리액트입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}
    </>
  );
};

export default Main;
```

## 1.4 AND 연산(&&)를 사용한 조건부 렌더링

```js
import React from "react";

const Main = () => {
  const title = "리액트";

  return <>{title === "리액트" && <h1>리액트입니다.</h1>}</>;
};

export default Main;
```

## 1.5 undefined를 렌더링하지 않기

- OR ||

```js
import React from "react";

const Main = () => {
  const title = undefined;

  return <div>{title}</div>;
};

export default Main;
```

## 1.6 인라인 스타일링

- DOM 요소에 스타일을 적용할 때는 문자열이 아닌 객체 형태로
- 카멜케이스

```js
import React from "react";

const Main = () => {
  const title = "리액트";

  return (
    <div
      style={{ backgroundColor: "pink", fontSize: "48px", fontWeight: "bold" }}
    >
      {title}
    </div>
  );
};

export default Main;
```

```js
import React from "react";

const Main = () => {
  const title = "리액트";

  const style = {
    backgroundColor: "pink",
    fontSize: "48px",
    fontWeight: "bold",
  };

  return <div style={style}>{title}</div>;
};

export default Main;
```

## 1.7 class 대신 className

```js
import React from "react";
import "./react.css";

const Main = () => {
  const title = "리액트";

  return <div className="react">{title}</div>;
};

export default Main;
```

## 1.8 styled-component (Emotion)

- CSS in JS

```js
import React from "react";
import "./react.css";
import styled from "@emotion/styled";

const StyledTitle = styled.div`
  background-color: pink;
  font-size: 48px;
  font-weight: bold;
`;

const Main = () => {
  const title = "리액트";

  return <StyledTitle>{title}</StyledTitle>;
};

export default Main;
```
