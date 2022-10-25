import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [calc, setCalc] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
  };

  const createNums = () => {
    const nums = [];

    for (let i = 1; i < 10; i++) {
      nums.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return nums;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const clear = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  };

  return (
    <div className="main">
      <div className="calculator">
        <div className="display">{calc || "0"}</div>

        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>

          <button onClick={clear}>C</button>
        </div>

        <div className="nums">
          {createNums()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
