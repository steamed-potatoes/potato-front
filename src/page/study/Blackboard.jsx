import React, { useState } from "react";

import "./style.css"

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
      <h1 className="h1tag">디지털 칠판</h1>
      <div>
        <input className="outputtag" value={name.value} />
        <input className="inputtag" placeholder="입력해주세요" {...name}  />
      </div>
    </div>
  );
};

export default Balckboard;