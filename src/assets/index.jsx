import React, { useReducer } from "react";

function reducer(state,action) {
  switch (action.type) {
    case "increament":
      return {count:state.count + action.payload}
      case "decreament":
        return {count:state.count - 1}
  
    default:
      break;
  }
}

const UseRed = () => {
  const [state, dispatch] = useReducer(reducer, { count: 1 });

  function increament() {
    dispatch({ type: "increament" , payload:2});
  }

  function decreament() {
    dispatch({ type: "decreament" });
  }
  return (
    <div>
      <button onClick={increament}>+</button>
      <div>deyerim:{state.count}</div>
      <button  onClick={decreament}>-</button>
    </div>
  );
};

export default UseRed;
