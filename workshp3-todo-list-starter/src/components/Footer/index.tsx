import Todo from "../../types";
import "./index.css";

type Props = {
  todos: Todo[];
  onUpdateTodos: () => void;
  onDeleteAllFinishedTasks: () => void;
};
export default function Footer(props: Props) {
  const { todos, onUpdateTodos, onDeleteAllFinishedTasks } = props;
  return (
    <div className="todo-footer">
      <label>
        <input
          type="checkbox"
          checked={
            todos.filter((todo) => todo.done).length === todos.length &&
            todos.length !== 0
          }
          onChange={() => onUpdateTodos()}
        />
      </label>
      <span>
        <span>Finished {todos.filter((todo) => todo.done).length}</span> / total{" "}
        {todos.length}
      </span>
      <button
        className="btn btn-danger"
        onClick={onDeleteAllFinishedTasks}
      >
        Delete Finished Tasks
      </button>
    </div>
  );
}
