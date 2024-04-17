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
