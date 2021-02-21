import React, { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
      setValue(event.target.value);
  };
  return { value, onChange };
};

const Balckboard = () => {
  const name = useInput("");
  return (
    <div>
      <h1>디지털 칠판</h1>
      <div>
        <textarea value={name.value} />
      </div>
      <input placeholder="입력해주세요" {...name} />
    </div>
  );
};

export default Balckboard;
