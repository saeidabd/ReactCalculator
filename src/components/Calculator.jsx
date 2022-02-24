import { useState } from "react";
import { AadadButtons } from "./Buttons";
import { Board } from "./Board";
import "./calculator.css";

function Calculator() {
  const [boardValue, setBoardValue] = useState("0");
  const onNumberClickHandler = (e) => {
    e.preventDefault();
    let value = e.target.textContent;
    if (boardValue[0] === "0") {
      setBoardValue((preValue) => preValue.slice(1) + e.target.textContent);
      return;
    }
    if (value === "C") {
      setBoardValue("0");
      return;
    }
    setBoardValue((preValue) => preValue + e.target.textContent);
  };
  const onEqualClickHandler = (e) => {
    e.preventDefault();
    setBoardValue(Calculate(boardValue));
  };
  return (
    <>
      <div className="container" dir="rtl">
        <form className="calculatorFrom">
          <Board boardValue={boardValue} />
          <AadadButtons
            onNumberClickHandler={onNumberClickHandler}
            onEqualClickHandler={onEqualClickHandler}
          />
        </form>
      </div>
    </>
  );
}

export default Calculator;

const Calculate = (boardValue) => {
  return eval(boardValue);
};
