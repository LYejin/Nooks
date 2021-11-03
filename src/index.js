import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
// useState = 동적인 값
// validator는 검증기능을 가지고 있다. 10보다 작은 글자수
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  // value와 setValue를 initialValue로 초기화값 지정
  // initalValue는 첫번째 전달된 인자
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true; // 항상 없데이트가 될 것이다.
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.includes("@");
  // includes = @를 포함하고 있으면 true 반환
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
