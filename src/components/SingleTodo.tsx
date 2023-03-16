import React from "react";
import { TodoProps } from "./Todo";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface SingleTodoProps {
  todo: TodoProps;
  todoList: TodoProps[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

const SingleTodo = ({ todo, todoList, setTodoList }: SingleTodoProps) => {
  const handleTodoDelete = (id: number) => {
    const removeFromTodoList = todoList.filter((todo) => todo.todoId !== id);
    setTodoList(removeFromTodoList);
  };

  const handleTodoDone = (id: number) => {
    const checkDone = todoList.map((todo) => {
      if (todo.todoId === id) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return todo;
      }
    });
    setTodoList(checkDone);
  };

  return (
    <form className="single-todo">
      {todo.isDone ? (
        <s className="single-todo-text">{todo.todo}</s>
      ) : (
        <span className="single-todo-text">{todo.todo}</span>
      )}
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleTodoDelete(todo.todoId)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleTodoDone(todo.todoId)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
