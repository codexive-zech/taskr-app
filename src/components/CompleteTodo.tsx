import React from "react";
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
  const handleTodoDelete = (id: number) => {
    const removeFromTodoList = todoList.filter((todo) => todo.todoId !== id);
    setTodoList(removeFromTodoList);
  };

  return (
    <Draggable draggableId={todo.todo} index={index}>
      {(provided, snapshot) => (
        <form
          className={`single-todo ${snapshot.isDragging ? "dragging" : null}`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <span className="single-todo-text">{todo.todo}</span>
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
