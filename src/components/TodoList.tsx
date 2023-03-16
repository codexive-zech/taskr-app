import React from "react";
import { TodoProps } from "./Todo";
import { SingleTodo } from "./index";

interface TodoListProps {
  todoList: TodoProps[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}
const TodoList = ({ todoList, setTodoList }: TodoListProps) => {
  return (
    <div className="todo-list">
      {todoList.map((todo) => {
        return (
          <SingleTodo
            todoList={todoList}
            setTodoList={setTodoList}
            todo={todo}
            key={todo.todoId}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
