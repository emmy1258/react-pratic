import React, { useEffect, useState } from "react";

function InputComponent() {
  const [inputValue, setInputValue] = useState("");
  const [ParagraphValue, setParagraphValue] = useState("");
  const [color, setColor] = useState("#555");

  const [count, setCount] = useState(0);

  const handleCount = () => setCount(count + 1);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (inputValue) {
      setParagraphValue(
        inputValue.length < 8
          ? "Password not valid"
          : inputValue.length >= 20
          ? "Password is too long"
          : "Password is valid"
      );
      setColor(
        inputValue.length < 8
          ? "red"
          : inputValue.length >= 20
          ? "blue"
          : "green"
      );
      console.log("set is done");
    }
  }, [inputValue]);

  return (
    <>
      <input type="text" onChange={(e) => handleChange(e)} />

      {inputValue && <p style={{ color }}>{ParagraphValue}</p>}

      <p>{count}</p>

      <button onClick={handleCount}>+</button>
    </>
  );
}

export default InputComponent;
