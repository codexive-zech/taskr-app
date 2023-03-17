import React, { useState, useEffect, useRef } from "react";
import { TodoProps } from "./Todo";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface SingleTodoProps {
  todo: TodoProps;
  todoList: TodoProps[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

const SingleTodo = ({ todo, todoList, setTodoList }: SingleTodoProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodoTask, setEditTodoTask] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

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

  const handleEditTodo = () => {
    if (edit === false && !todo.isDone) {
      setEdit(!edit);
    }
  };

  const handleEditing = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    const getEdit = todoList.map((todo) => {
      if (todo.todoId === id) {
        return { ...todo, todo: editTodoTask };
      } else {
        return todo;
      }
    });
    setTodoList(getEdit);
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className="single-todo"
      onSubmit={(e) => handleEditing(e, todo.todoId)}
    >
      {edit ? (
        <input
          type="text"
          value={editTodoTask}
          onChange={(e) => setEditTodoTask(e.target.value)}
          className="single-todo-text-input"
          ref={inputRef}
        />
      ) : todo.isDone ? (
        <s className="single-todo-text">{todo.todo}</s>
      ) : (
        <span className="single-todo-text">{todo.todo}</span>
      )}
      <div>
        <span className="icon" onClick={handleEditTodo}>
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
