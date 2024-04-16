import { ChangeEvent } from "react";
import Todo from "../../types";
import "./index.css";

type Props = {
  todos: Todo[];
  onUpdateTodos: (done:boolean) => void;
  onDeleteFinishedTasks: () => void;
};
export default function Footer(props: Props) {
  const { todos, onUpdateTodos, onDeleteFinishedTasks } = props;

  const checkedChange = (e: ChangeEvent<HTMLInputElement>) => {
    onUpdateTodos(e.target.checked);
  };

  return (
    <div className="todo-footer">
      <label>
        <input
          type="checkbox"
          checked={
            todos.filter((todo) => todo.done).length === todos.length &&
            todos.length !== 0
          }
          onChange={checkedChange}
        />
      </label>
      <span>
        <span>Finished {todos.filter((todo) => todo.done).length}</span> / total{" "}
        {todos.length}
      </span>
      <button className="btn btn-danger" onClick={onDeleteFinishedTasks}>
        Delete Finished Tasks
      </button>
    </div>
  );
}
