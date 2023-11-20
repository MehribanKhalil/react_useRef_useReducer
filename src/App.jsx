import { useRef } from "react";
// import { useReducer } from "react";
import "./App.css";
import UseRed from "./assets";

// function Reducer(state, action) {
//   switch (action.type) {
//     case "topla":
//       return { result: state.num1 + state.num2 };
//     case "cixma":
//       return { result: state.num1 - state.num2 };
//     default:
//       break;
//   }
// }

function App() {


  const div = useRef();
  const inp = useRef();

  function showVal() {
    console.log(div.current.textContent);
    console.log(inp.current.value);
  }

  // const [state, dispatch] = useReducer(
  //   Reducer,
  //   { result: 0 ,num1: 0  ,num2: 0}

  // );

  // const getFirstValue = (e) => {
  //   state.num1=parseInt(e.target.value);
  // };
  // const getSecondValue = (e) => {
  //   state.num2=parseInt(e.target.value)
  // };

  return (
    <>
      {/* <input type="number" placeholder="num1" onChange={getFirstValue} />
      <input type="number" placeholder="num2" onChange={getSecondValue} />

      <button onClick={() => dispatch({ type: "topla" })}>+</button>
      <button onClick={() => dispatch({ type: "cixma" })}>-</button>
      {state.result} */}

      <div ref={div}>
        <input type="text" ref={inp} />
        <button onClick={showVal}>show</button>
      </div>

      <UseRed/>
    </>
  );
}

export default App;
