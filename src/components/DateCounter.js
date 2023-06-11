import { useReducer, useState } from "react";

function reducer(state, action) {
  console.log(state);
  if (action.type === "dec") return { ...state, count: state.count - 1 };
  if (action.type === "inc") return { state, count: state.count + 1 };
  if (action.type === "cou") return action.payload;
  // if (action.type === "who") return (state.person = "WW");
}

const initalState = { count: 1, stat: 0 };

function DateCounter() {
  // const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(reducer, initalState);
  // console.log(count);
  const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatch({ type: "dec" });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({ type: "cou", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    setStep(Number(e.target.value));
    // dispatch({ type: "cou", payload: Number(e.target.value) });
  };

  const reset = function () {
    // setCount(0);
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
