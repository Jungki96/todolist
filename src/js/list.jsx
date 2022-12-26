import React from "react";
import ListCard from "./listcard";

function List({ todos, setTodos }) {
  const onDeleteHanlder = (todoId) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(newTodos);
  };
  const onEditHandler = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          done: !todo.done,
        };
      } else {
        return { ...todo };
      }
    });
    setTodos(newTodos);
  };

  return (
    <div className="listGroup">
      <div className="listWorking">실행중</div>
      <div className="oneList">
        {todos.map((todo) => {
          if (!todo.done) {
            return (
              <ListCard
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHanlder={onDeleteHanlder}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="listDone">완료</div>
      <div className="oneList">
        {todos.map((todo) => {
          if (todo.done) {
            return (
              <ListCard
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHanlder={onDeleteHanlder}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default List;
