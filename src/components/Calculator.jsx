import { useState } from "react";
import { AadadButtons } from "./AadadButtons";
import { Board } from "./Board";
import "./calculator.css";

function Calculator() {
  const [boardValue, setBoardValue] = useState("0");
  const onAadadClickHandler = (e) => {
    e.preventDefault();
    let value = e.target.textContent;
    if (value === "C") {
      setBoardValue("0");
      return;
    }
    setBoardValue((preValue) => preValue + e.target.textContent);
  };
  return (
    <>
      <div className="container" dir="rtl">
        <form className="calculatorFrom">
          <Board boardValue={boardValue} />
          <AadadButtons onAadadClickHandler={onAadadClickHandler} />
        </form>
      </div>
    </>
  );
}

export default Calculator;
