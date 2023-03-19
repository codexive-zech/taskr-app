import React, { useState, useRef, useEffect } from "react";
import { TodoProps } from "./Todo";
import { TodoList } from "./index";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const InputField = () => {
  const [todoTask, setTodoTask] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoProps[]>([]);
  const [completedTodoList, setCompletedTodoList] = useState<TodoProps[]>([]);

  let inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todoTask) {
      setTodoList([...todoList, { todoId: Date.now(), todo: todoTask }]);
    }
    setTodoTask("");
  };

  useEffect(() => {
    inputRef.current?.blur();
  }, [todoList]);

  const handleOnDrag = (results: DropResult) => {
    const { source, destination } = results;
    console.log(source, destination);

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      active = todoList,
      complete = completedTodoList;

    if (source.droppableId === "active-todo") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "active-todo") {
      active.splice(destination.index, 0, { ...add });
    } else {
      complete.splice(destination.index, 0, { ...add });
    }

    setCompletedTodoList(complete);
    setTodoList(active);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleOnDrag}>
        <form className="input" onSubmit={handleAdd}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter Your Task"
            className="input-box"
            value={todoTask}
            onChange={(e) => setTodoTask(e.target.value)}
          />
          <button type="submit" className="input-btn">
            GO
          </button>
        </form>
        <TodoList
          todoList={todoList}
          completedTodoList={completedTodoList}
          setTodoList={setTodoList}
          setCompletedTodoList={setCompletedTodoList}
        />
      </DragDropContext>
    </>
  );
};

export default InputField;
