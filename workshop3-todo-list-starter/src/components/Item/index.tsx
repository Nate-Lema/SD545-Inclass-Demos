import React, { ChangeEvent, useState } from "react";
import Todo from "../../types";
import "./index.css";

type Props = {
  todo: Todo;
  onDeleteTodoById: (id: string) => void;
  onUpdateTodo: (id: string) => void;
};

export default function Item(props: Props) {
  const [isHovering, setIsHovering] = useState(false);
  const { todo, onDeleteTodoById, onUpdateTodo } = props;
  const { id, name, done } = todo;

  

  return (
    <li
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <label>
        <input
          type="checkbox"
          checked={done}
          onChange={()=>onUpdateTodo(id)}
        />
        <span>{name}</span>
      </label>
      {isHovering && (
        <button className="btn btn-danger" onClick={() => onDeleteTodoById(id)}>
          Delete
        </button>
      )}
    </li>
  );
}
