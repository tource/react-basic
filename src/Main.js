import React, { useState } from "react";

const Main = () => {
  const object = { a: 1, b: 2, c: 3 };
  const nextObject = { ...object, b: 5 }; // object 사본을 만들어서 b 값만 덮어쓴다.
  console.log(nextObject, object);

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

  return (
    <div>
      {/* <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1> */}
    </div>
  );
};

export default Main;
