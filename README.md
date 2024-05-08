# 10. Centext API

- 리액트 프로젝트에서 전역적으로 사용할 데이터가 있을 때 **유용한 기능**
- 상태관리 도구는 아닙니다.
- 사용자 로그인 정보, 애플리케이션 환경 설정, 테마 등등

## 10.1 Context API를 사용한 전역 상태 관리 흐름 이해하기

- 최상위 컴포넌트에서 여러 컴포넌트를 거쳐 props로 원하는 상태와 함수를 전달했지만
- Context API를 사용하면 Context를 만들어서 원하는 값을 받아와서 사용할 수 있다.

## 10.2 Context API 사용법

### 10.2.1 새 Context 만들기

- src/contexts/color.js

```js
import { createContext } from "react";

const ColorContext = createContext({ color: "black" });
```

### 10.2.2 Consumer사용하기

- 색상을 props로 받아오는 것이 아니라 ColorContext 안에 들어있는 Consumer라는 컴포넌트를 통해 색상을 조회한다.
- src/components/ColorBox.js

```js
import React from "react";
import { ColorContext } from "../contexts/colorContext";

export const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {value => (
        <div
          style={{ width: "200px", height: "200px", background: value.color }}
        ></div>
      )}
    </ColorContext.Consumer>
  );
};
```

### 10.2.3 Provider

- Provide를 사용하여 Context의 value를 변경할 수 있다.
- src/App.js

```js
import { ColorBox } from "./components/ColorBox";
import { ColorContext } from "./contexts/colorContext";

function App() {
  return (
    <ColorContext.Provider value={{ color: "red" }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
}

export default App;
```

## 10.3 동적 Context 사용하기

- Context의 값을 업데이트 해야하는 경우

### 10.3.1 Context 파일

- Context의 value 에는 상태 값 뿐만 아니라 함수를 전달해 줄 수 있다.
- src/contexts/colorContext.js

```js
import { Children, createContext, useState } from "react";

export const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actios: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

export const colorProvider = Children => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubColor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubColor },
  };

  return (
    <ColorContext.Provider value={value}>{Children}</ColorContext.Provider>
  );
};

export const { Consumer: colorConsumer } = ColorContext;
```

### 10.3.2 Context 반영하기

- App.js

```js
import { ColorBox } from "./components/ColorBox";
import { colorProvider } from "./contexts/colorContext";

function App() {
  return (
    <colorProvider>
      <div>
        <ColorBox />
      </div>
    </colorProvider>
  );
}

export default App;
```

- src/components/ColorBox.js

```js
import React from "react";
import { colorContext } from "../contexts/colorContext";
import { colorConsumer } from "../contexts/colorContext";

const ColorBox = () => {
  return (
    <colorConsumer>
      {({ state }) => (
        <>
          <div
            style={{ width: "200px", height: "200px", background: state.color }}
          ></div>
          <div
            style={{
              width: "200px",
              height: "200px",
              background: state.subcolor,
            }}
          ></div>
        </>
      )}
    </colorConsumer>
  );
};

export default ColorBox;
```

### 10.3.3 색상 선택 컴포넌트 만들기

- Context의 actions에 넣어 준 함수를 호출하는 컴포넌트
- src/components/SelectColors.js

```js
import React from "react";
import { ColorConsumer } from "../contexts/colorContext";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map(color => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "100px",
                  height: "100px",
                  cursor: "pointer",
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={e => {
                  e.preventDefault(); // 기본동작 방지
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
    </div>
  );
};

export default SelectColors;
```

## 10.4 Consumer 대신 Hook 사용하기

- Context에 있는 값을 사용할 때 Consumer 대신에 다른 방식을 사용하여 값을 받아오기

### 10.4.1 useContext 사용하기

- src/components/ColorBox.js

```js
import React, { useContext } from "react";
import { ColorContext } from "../contexts/colorContext";

const ColorBox = () => {
  const { state } = useContext(ColorContext);

  return (
    <>
      <div
        style={{ width: "200px", height: "200px", background: state.color }}
      ></div>
      <div
        style={{
          width: "200px",
          height: "200px",
          background: state.subcolor,
        }}
      ></div>
    </>
  );
};

export default ColorBox;
```

- src/components/SelectColors.js

```js
import React, { useContext } from "react";
import { ColorContext } from "../contexts/colorContext";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  const { actions } = useContext(ColorContext);

  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <div style={{ display: "flex" }}>
        {colors.map(color => (
          <div
            key={color}
            style={{
              background: color,
              width: "100px",
              height: "100px",
              cursor: "pointer",
            }}
            onClick={() => actions.setColor(color)}
            onContextMenu={e => {
              e.preventDefault(); // 기본동작 방지
              actions.setSubcolor(color);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectColors;
```
