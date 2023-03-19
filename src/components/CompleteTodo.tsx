import React, { useState, useEffect, useRef } from "react";
import { TodoProps } from "./Todo";
import { AiFillDelete } from "react-icons/ai";
import { Draggable } from "react-beautiful-dnd";

interface SingleTodoProps {
  index: number;
  todo: TodoProps;
  todoList: TodoProps[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

const CompleteTodo = ({
  index,
  todo,
  todoList,
  setTodoList,
}: SingleTodoProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodoTask, setEditTodoTask] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleTodoDelete = (id: number) => {
    const removeFromTodoList = todoList.filter((todo) => todo.todoId !== id);
    setTodoList(removeFromTodoList);
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
    <Draggable draggableId={todo.todo} index={index} key={`row_${index}`}>
      {(provided) => (
        <form
          className="single-todo"
          onSubmit={(e) => handleEditing(e, todo.todoId)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {edit ? (
            <input
              type="text"
              value={editTodoTask}
              onChange={(e) => setEditTodoTask(e.target.value)}
              className="single-todo-text-input"
              ref={inputRef}
            />
          ) : (
            <span className="single-todo-text">{todo.todo}</span>
          )}
          <div>
            <span
              className="icon"
              onClick={() => handleTodoDelete(todo.todoId)}
            >
              <AiFillDelete />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default CompleteTodo;
