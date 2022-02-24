import { useState } from "react";
import { AadadButtons } from "./AadadButtons";
import { Board } from "./Board";
import "./calculator.css"

function Calculator() {
  const [boardValue, setBoardValue] = useState("0");
  const onAadadClickHandler = (e) => {
    let value = e.target.textContent;
    if (value === "C") {
      setBoardValue("0");
      return;
    }
    setBoardValue((preValue) => preValue + e.target.textContent);
  };
  return (
    <>
      <form className="calculatorFrom">
        <Board boardValue={boardValue} />
        <AadadButtons onAadadClickHandler={onAadadClickHandler} />
      </form>
    </>
  );
}

export default Calculator;
