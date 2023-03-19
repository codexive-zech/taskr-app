import React from "react";
import { TodoProps } from "./Todo";
import { CompleteTodo, SingleTodo } from "./index";
import { Droppable } from "react-beautiful-dnd";

interface TodoListProps {
  todoList: TodoProps[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoProps[]>>;
  completedTodoList: TodoProps[];
  setCompletedTodoList: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

const TodoList = ({
  todoList,
  setTodoList,
  completedTodoList,
  setCompletedTodoList,
}: TodoListProps) => {
  return (
    <div className="todo-container">
      <Droppable droppableId="active-todo">
        {(provided) => (
          <div
            className="todo-list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todo-heading">Active Task</span>
            {todoList.map((todo, index) => {
              return (
                <SingleTodo
                  index={index}
                  todo={todo}
                  todoList={todoList}
                  setTodoList={setTodoList}
                  key={todo.todoId}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {/* Completed Todo Section */}
      <Droppable droppableId="completed-todo">
        {(provided) => (
          <div
            className="todo-list completed-todo"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todo-heading">Completed Task</span>
            {completedTodoList.map((todo, index) => {
              return (
                <CompleteTodo
                  index={index}
                  todo={todo}
                  todoList={completedTodoList}
                  setTodoList={setCompletedTodoList}
                  key={todo.todoId}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
