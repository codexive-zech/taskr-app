import React from "react";
import { TodoProps } from "./Todo";
import { SingleTodo } from "./index";

interface TodoListProps {
  todoList: TodoProps[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}
const TodoList = ({ todoList, setTodoList }: TodoListProps) => {
  return (
    <div className="todo-container">
      <div className="todo-list">
        <span className="todo-heading">Active Task</span>
        {todoList.map((todo) => {
          return (
            <SingleTodo
              todo={todo}
              todoList={todoList}
              setTodoList={setTodoList}
              key={todo.todoId}
            />
          );
        })}
      </div>
      <div className="todo-list completed-todo">
        <span className="todo-heading">Completed Task</span>
        {todoList.map((todo) => {
          return (
            <SingleTodo
              todo={todo}
              todoList={todoList}
              setTodoList={setTodoList}
              key={todo.todoId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
