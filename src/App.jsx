import React, { useState } from "react";
import "./js/App.css";
import Title from "./js/title";
import Input from "./js/input";
import List from "./js/list";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "코드리뷰",
      desc: "내가 만든 투두리스트 코드를 분석 및 해석하기",
      done: false,
    },
    {
      id: 2,
      title: "책공부",
      desc: "혼공스 9단원 클래스를 공부하자",
      done: true,
    },
  ]);
  console.log(todos);
  return (
    <div className="thiIsAuto">
      <Title />
      <Input setTodos={setTodos} todos={todos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
};
export default App;
