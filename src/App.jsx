import React, { useState } from "react";
import "./js/App.css";
import Title from "./js/title";
import Input from "./js/input";
import List from "./js/list";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "예시1",
      desc: "리액트 기초를 공부해봅시다.",
      done: false,
    },
    {
      id: 2,
      title: "예시2",
      desc: "리액트 기초를 공부해봅시다.",
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
