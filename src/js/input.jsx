import React, { useState } from "react";

let number = 3; // 밑에 있는 번호에 추가를 해주기 위해 필수되는 값
function Input({ setTodos, todos }) {
  const makeTodo = {
    id: 0,
    title: "",
    desc: "",
    done: false,
  };

  const [todo, setTodo] = useState(makeTodo);
  const onMakeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // if (todo.title.trim() === "" || todo.body.trim() === "") return; //일단 검색되지 않았때를 대비해서
    setTodos([...todos, { ...todo, id: number }]);
    setTodo(makeTodo);
    number++;
  };
  return (
    <form className="addBox" onSubmit={onSubmitHandler}>
      <div className="addGroup">
        <label className="form-label">제목</label>
        <input
          type="text"
          name="title"
          value={todo.title}
          className="add-input input-body"
          onChange={onMakeHandler}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          name="desc"
          value={todo.desc}
          className="add-input"
          onChange={onMakeHandler}
        />
      </div>
      {/* <input type="submit" value="추가하기:submit"></input> */}
      <button type="submit" className="add-button">
        추가하기
      </button>
    </form>
  );
}

export default Input;
