import { useState } from "react";
import { AadadButtons } from "./Buttons";
import { Board } from "./Board";
import "./calculator.css";

function Calculator() {
  const [boardValue, setBoardValue] = useState("0");
  const onNumberClickHandler = (e) => {
    console.log(boardValue);
    e.preventDefault();
    let value = e.target.textContent;
    if (boardValue[boardValue.length - 1] === "." && value === ".") {
      return;
    }
    if (boardValue[boardValue.length - 1] === "+" && value === "+") {
      return;
    }
    if (boardValue[boardValue.length - 1] === "-" && value === "-") {
      return;
    }
    if (boardValue[boardValue.length - 1] === "*" && value === "*") {
      return;
    }
    let dotInclude = false;
    for (let index = 0; index < boardValue.length; index++) {
      const char = boardValue[index];
      if (char === ".") {
        dotInclude = true;
      }
    }
    if (value === "." && dotInclude) {
      console.log("ss");
      return;
    }

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
