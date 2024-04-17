import React, { useEffect, useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {}, [value]);

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
