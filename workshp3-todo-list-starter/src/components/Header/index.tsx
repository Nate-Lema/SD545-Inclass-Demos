import { KeyboardEvent } from "react";
import Todo from "../../types";
import "./index.css";
import { nanoid } from "nanoid";

type Props = {
  onAddTodoList: (todo: Todo) => void;
};

export default function Header(props: Props) {
  const { onAddTodoList } = props;
  const addTodo = (e: KeyboardEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (value.trim()) {
      if (e.key === "Enter") {
        onAddTodoList({ id: nanoid(), name: value, done: false });
        e.currentTarget.value = "";
        e.currentTarget.focus();
      }
    }
  };
  return (
    <div className="todo-header">
      <input type="text" placeholder="Enter task name" onKeyUp={addTodo} />
    </div>
  );
}
