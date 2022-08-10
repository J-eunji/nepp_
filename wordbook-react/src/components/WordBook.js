import { useReducer, useRef, useEffect } from "react";
import styled from "styled-components";
import WordBookHeader from "./WordBookHeader";
import WordInput from "./WordInput";
import WordList from "./WordList";

function reducer(state, action) {
  switch (action.type) {
    case "create_word":
      return [...state, action.word];
    case "remove_word":
      return state.filter((word) => word.id !== action.id);
    case "toggle_word":
      return state.map((word) =>
        word.id === action.id ? { ...word, active: !word.active } : word
      );
    default:
      return state;
  }
}

const initialState = JSON.parse(localStorage.getItem("wordList"));

export default function WordBook() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const nextId = useRef(state.length + 1);

  const onCreate = (eng, kor) => {
    const engList = state.map((word) => word.eng);
    if (engList.includes(eng)) {
      alert("이미 등록된 단어입니다.");
    } else {
      dispatch({
        type: "create_word",
        word: { id: nextId.current, eng, kor },
      });
      nextId.current++;
    }
  };

  const onRemove = (id) => {
    dispatch({ type: "remove_word", id });
  };

  const onToggle = (id) => {
    dispatch({ type: "toggle_word", id });
  };

  useEffect(() => {
    localStorage.setItem("wordList", JSON.stringify(state));
  }, [state]);

  return (
    <div>
      <Template>
        <WordBookBlock>
          <WordBookHeader state={state} />
          <WordList wordList={state} onRemove={onRemove} onToggle={onToggle} />
          <WordInput wordList={state} onCreate={onCreate} />
        </WordBookBlock>
      </Template>
    </div>
  );
}

const Template = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background-color: #f1f1f1;
`;

const WordBookBlock = styled.div`
  width: 400px;
  height: 500px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  position: relative;
`;
