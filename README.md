# 5. 컴포넌트 반복

## 5.1 자바스크립트 배열의 map() 메서드

- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map

## 5.2 데이터 배열을 컴포넌트 배열로 변환하기

```js
import React from "react";

const Main = () => {
  const usernames = ["홍길동", "임꺽정", "알라딘", "지니", "미키마우스"];

  return (
    <div>
      <ul>
        {usernames.map((username, index) => {
          return <li key={index}>{username}</li>;
        })}
      </ul>
    </div>
  );
};

export default Main;
```

## 5.3 응용

### 5.3.1 초기 상태 설정하기

```js
import React, { useState } from "react";

const initState = [
  { id: 1, username: "알라딘" },
  { id: 2, username: "지니" },
  { id: 3, username: "홍길동" },
  { id: 4, username: "임꺽정" },
  { id: 5, username: "미키마우스" },
];

const Main = () => {
  // member 목록 상태
  const [members, setMembers] = useState(initState);
  // id 상태
  const [nextId, setNextId] = useState(6);

  return (
    <div>
      <ul>
        {members.map(member => (
          <li key={member.id}>{member.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
```

### 5.3.2 데이터 추가 기능 구현하기

- push가 아닌 concat을 사용하자 이유는 불변성유지(immutable)
- 리액트에서는 상태를 업데이트할 때 기존 상태를 그대로 두면서 새로운 값을 설정해야한다.(불병성유지)
- push는 기존 배열 자체를 변경
- concat은 새로운 배열을 만들어 준다.

```js
import React, { useState } from "react";

const initState = [
  { id: 1, username: "알라딘" },
  { id: 2, username: "지니" },
  { id: 3, username: "홍길동" },
  { id: 4, username: "임꺽정" },
  { id: 5, username: "미키마우스" },
];

const Main = () => {
  // member 목록 상태
  const [members, setMembers] = useState(initState);
  // id 상태
  const [nextId, setNextId] = useState(6);
  // input 상태
  const [username, setUsername] = useState("");

  const onChange = e => {
    setUsername(e.target.value);
  };

  const onClick = () => {
    // console.log("사용자 이름 추가할거임");
    // 배열의 내장 함수 concat을 사용하여 새로운 항목을 추가한 배열로 만든다.
    const nextMembers = members.concat({
      id: nextId,
      username: username,
    });
    setNextId(nextId + 1);
    // console.log(nextId);
    setMembers(nextMembers);
    // console.log(nextMembers);
    setUsername("");
    // console.log("추가됐음");
  };

  return (
    <div>
      <input onChange={onChange} value={username} />
      <button onClick={onClick}>사용자 추가</button>

      <ul>
        {members.map(member => (
          <li key={member.id}>{member.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
```

### 5.3.3 데이터 제거 기능 구현하기

- 각 항목을 더블클릭했을 때 화면에서 사라지는 기능
- 불변성을 유지 하면서 업데이트 filter 함수 사용
- filter 함수는 배열에서 특정 조건을 만족하는 원소들만 분류

```js
import React, { useState } from "react";

const initState = [
  { id: 1, username: "알라딘" },
  { id: 2, username: "지니" },
  { id: 3, username: "홍길동" },
  { id: 4, username: "임꺽정" },
  { id: 5, username: "미키마우스" },
];

const Main = () => {
  // member 목록 상태
  const [members, setMembers] = useState(initState);
  // id 상태
  const [nextId, setNextId] = useState(6);
  // input 상태
  const [username, setUsername] = useState("");

  // input 핸들러
  const onChange = e => {
    setUsername(e.target.value);
  };

  const onClick = () => {
    const nextMembers = members.concat({
      id: nextId,
      username: username,
    });
    setNextId(nextId + 1);
    setMembers(nextMembers);
    setUsername("");
  };

  // remove 이벤트 핸들러
  const onRemove = id => {
    const nextMembers = members.filter(member => member.id !== id);
    setMembers(nextMembers);
  };

  return (
    <div>
      <input onChange={onChange} value={username} />
      <button onClick={onClick}>사용자 추가</button>

      <ul>
        {members.map(member => (
          <li key={member.id} onDoubleClick={() => onRemove(member.id)}>
            {member.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
```
