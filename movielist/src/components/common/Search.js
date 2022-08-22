import { useEffect, useState } from "react";
import styled from "styled-components";
import { getSearch } from "../../custom-axios";
import ResultItem from "./ResultItem";

// 일정 시간내에 같은 이벤트가 등록 되면
// 기존 이벤트 취소
// 서버 성능을 위해 중요함..
const debounce = (func, wait) => {
  let timer;
  return function (...rest) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, rest);
    }, wait);
  };
};

export default function Search({ result }) {
  const [query, setQuery] = useState("");
  const [resultList, setResultList] = useState([]);

  const handleQuery = debounce(setQuery, 300);

  useEffect(() => {
    if (query === "") return;
    getSearch(query).then((res) => setResultList(res.data.results));
  }, [query]);

  console.log(resultList);

  return (
    <Block>
      <input type="text" onChange={(e) => handleQuery(e.target.value)} />
      <ResultList>
        {resultList.map((result) => (
          <ResultItem key={result.id} result={result} />
        ))}
      </ResultList>
    </Block>
  );
}

const Block = styled.div`
  padding: 5px 10px;
  border: gray 1px solid;
  height: 30px;
  input {
    border: none;
    outline: none;
    height: 30px;
  }
  position: relative;
`;

const ResultList = styled.ul`
  position: absolute;
  top: 100%;
  left: -1px;
  width: 100%;
  border: 1px solid #ddd;
  border-bottom: none;
`;

// const ResultItem = styled.li`
//   border-bottom: 1px solid #ddd;
//   padding: 10px 5px;
//   height: 20px;
// `;
