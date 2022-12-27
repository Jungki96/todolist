import React from "react";

function ListCard({ todo, onDeleteHanlder, onEditHandler }) {
  return (
    <div className="todoBox">
      <div>
        <div className="todoTitle">{todo.title}</div>
        <div className="todoDesc">{todo.desc}</div>
      </div>
      <div className="btnGroup">
        <button className="btnDelete" onClick={() => onDeleteHanlder(todo.id)}>
          삭제하기
        </button>
        <button className="btnComplete" onClick={() => onEditHandler(todo.id)}>
          {todo.done ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default ListCard;
