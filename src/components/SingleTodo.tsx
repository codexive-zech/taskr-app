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
  return (
    <form className="single-todo">
      <span className="single-todo-text">{todo.todo}</span>
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon">
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
