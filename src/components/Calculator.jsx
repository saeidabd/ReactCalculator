import { useState } from "react";
import { AadadButtons } from "./Buttons";
import { Board } from "./Board";
import "./calculator.css";
import compute from "./compute";

function Calculator() {
  const [boardValue, setBoardValue] = useState("0");
  const onNumberClickHandler = (e) => {
    e.preventDefault();
    let value = e.target.textContent;
    if (boardValue.length > 11) {
      return;
    }
    if (
      (boardValue[boardValue.length - 1] === "." ||
        boardValue[boardValue.length - 1] === "+" ||
        boardValue[boardValue.length - 1] === "/" ||
        boardValue[boardValue.length - 1] === "-" ||
        boardValue[boardValue.length - 1] === "*") &&
      (value === "." ||
        value === "+" ||
        value === "-" ||
        value === "*" ||
        value === "/")
    ) {
      return;
    }
    let dotInclude = false;
    let lastVal = boardValue.split("+");
    lastVal = lastVal[lastVal.length - 1];
    lastVal = lastVal.split("-");
    lastVal = lastVal[lastVal.length - 1];
    lastVal = lastVal.split("*");
    lastVal = lastVal[lastVal.length - 1];
    lastVal = lastVal.split("/");
    lastVal = lastVal[lastVal.length - 1];
    for (let index = 0; index < lastVal.length; index++) {
      const char = lastVal[index];
      if (char === ".") {
        dotInclude = true;
      }
    }
    if (value === "." && dotInclude) {
      return;
    }

    if (boardValue[0] === "0") {
      if (value === "/" || value === "*") {
        return;
      }
      if (value === ".") {
        setBoardValue("0.");
        return;
      }
      if (boardValue.length === 1) {
        setBoardValue((preValue) => preValue.slice(1) + e.target.textContent);
        return;
      }
    }
    if (value === "C") {
      setBoardValue("0");
      return;
    }
    setBoardValue((preValue) => preValue + e.target.textContent);
  };
  const onEqualClickHandler = (e) => {
    e.preventDefault();
    setBoardValue(compute(boardValue));
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
