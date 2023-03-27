import produce from "immer";
import React, { useReducer } from "react";
import Button from "./Button";
import * as CONST from "./const.js";

const reducer = (state, action) => {
  switch (action.type) {
    case CONST.INCREMENT_COUNT:
      return state.count= state.count + 1
    case CONST.DECREMENT:
      return  state.count= state.count - 1
    case CONST.SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case CONST.ADD:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd:0
      };
    default:
      return state;
  }
  //   if (action.type === CONST.INCREMENT_COUNT) {
  //     return {
  //       ...state,
  //       count: state.count + 1,
  //     };
  //   } else if (action.type === CONST.DECREMENT) {
  //     return {
  //       ...state,
  //       count: state.count - 1,
  //     };
  //   } else if (action.type === CONST.SET_VALUE_TO_ADD) {
  //     return {
  //       ...state,
  //       valueToAdd: action.payload,
  //     };
  //   } else if (action.type === CONST.ADD) {
  //     return {
  //       ...state,
  //       count: state.count + state.valueToAdd,
  //     };
  //   }
};
export default function Counter({ intialValue }) {
  //   const [count, setCount] = useState(intialValue);
  //   const [valueToAdd, setValueTOAdd] = useState(0);
  const [state, dispatch] = useReducer(produce(reducer), {
    count: intialValue,
    valueToAdd: 0,
  });
  const increment = () => {
    // setCount(count + 1);
    dispatch({
      type: "increment",
    });
  };
  const decrement = () => {
    dispatch({
      type: "decrement",
    });
    //setCount(count - 1);
  };
  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    console.log(value);
    dispatch({
      type: "change-value-to-add",
      payload: value,
    });
    //setValueTOAdd(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "add",
    });
    // setCount(count + valueToAdd);
    // setValueTOAdd(0);
  };
  return (
    <div>
      <h1 className="text-lg">count is: {state.count}</h1>
      <div className="flex flex-row">
        <Button type="submit" onClick={increment}>
          increment
        </Button>
        <Button type="submit" onClick={decrement}>
          decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add alot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray border border-gray-300"
        />
        <Button>Add it</Button>
      </form>
    </div>
  );
}
