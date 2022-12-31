import React, { useState } from "react";
import "./js/App.css";
import Input from "./js/input";
import List from "./js/list";
import Layout from "./shared/Layout";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "221231",
      desc: "Id Generator 활용이 안되서 2시간 삭제",
      done: false,
    },
    {
      id: 2,
      title: "책공부",
      desc: "혼공스 9단원 클래스를 혼자서 공부해보자",
      done: true,
    },
  ]);
  console.log(todos);
  return (
    <Layout>
      <Input setTodos={setTodos} todos={todos} />
      <List todos={todos} setTodos={setTodos} />
    </Layout>
  );
};
export default App;
