import Todo from "../../types";
import Item from "../Item";

type Props = {
  todos: Todo[];
  onDeleteTodoById: (id: string) => void;
  onUpdateTodo: (id: string) => void;
};

export default function List(props: Props) {
  const { todos, onDeleteTodoById, onUpdateTodo } = props;

  return (
    <ul className="todo-main">
      {todos.map((todo) => (
        <Item
          key={todo.id}
          todo={todo}
          onDeleteTodoById={onDeleteTodoById}
          onUpdateTodo={onUpdateTodo}
        />
      ))}
    </ul>
  );
}
