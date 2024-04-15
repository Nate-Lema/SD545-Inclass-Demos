import React, { useState } from "react";
import Todo from "../../types";
import "./index.css";

type Props = {
  todo: Todo;
  onDeleteTodoById: (id: string) => void;
  onUpdateTodo: (id: string) => void;
};

export default function Item(props: Props) {
  const { todo, onDeleteTodoById, onUpdateTodo } = props;
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <li
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <label>
        <input type="checkbox" checked={todo.done} onChange={()=>onUpdateTodo(todo.id)} />
        <span>{todo.name}</span>
      </label>
      {isHovering && (
        <button
          className="btn btn-danger"
          onClick={() => onDeleteTodoById(todo.id)}
        >
          Delete
        </button>
      )}
    </li>
  );
}
