import React, { useRef, useState } from "react";

const getAverage = number => {
  console.log("평균값 계산 중...");
  if (number.length === 0) return 0;

  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  const sum = number.reduce((a, b) => a + b);
  return sum / number.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  // useRef
  const inputElement = useRef(null);

  // input 이벤트 핸들러
  const onChange = e => {
    setNumber(e.target.value);
    console.log(e.target.value);
  };

  // button 이벤트 핸들러
  const onClick = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    // useRef
    inputElement.current.focus();
  };

  // useRef 로컬 변수 사용하기
  // 더블클릭 방지 기능
  const isClick = useRef(false);
  const preventDblClick = () => {
    if (isClick.current) {
      console.log("이미 처리중입니다...");
      inputElement.current.focus();
      return;
    }

    console.log("처리 시작...");
    isClick.current = true;
    onClick();

    // 처리에 1초가 소요된다고 가정하자.
    setTimeout(() => {
      isClick.current = false;
      console.log("처리완료");
    }, 2000);
  };

  const avg = getAverage(list);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={onChange}
        ref={inputElement}
      />
      <button onClick={preventDblClick}>등록</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <b>평균값: </b>
        {avg}
      </div>
    </div>
  );
};

export default Average;
