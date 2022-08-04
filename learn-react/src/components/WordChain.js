import { useReducer } from "react";

const initialState = {
  inputText: "",
  kewordList: ["리액트"],
};

function reducer(state, action) {
  switch (action.type) {
    case "inputChange":
      return { ...state, input: action.input };
    case "keywordChange":
      if (
        state.input.charAt(0) === state.keywordList[state.keywordList.length - 1].charAt(state.keyword.length - 1)
      ) {
        if (state.keywordList.includes(state.input)) {
          alert("이미 등록된 단어입니다.");
        } else {
            ...state,
            keyword: state.input,
            keywordList: [...state.keywordList, state.input],
          };
        }
    default:
      return state;
  }
}

function WordChain() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h3>{state.keyword}</h3>
      <input
        onChange={(e) =>
          dispatch({ type: "inputChange", input: e.target.value })
        }
        type="text"
      />
      <button onClick={() => dispatch({ type: "keywordChange" })}>
        {" "}
        쿵쿵따{" "}
      </button>
    </>
  );
}

export default WordChain;
