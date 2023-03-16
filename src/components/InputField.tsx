import React, { useState, useRef, useEffect } from "react";
import { TodoProps } from "./Todo";

const InputField = () => {
  const [todoTask, setTodoTask] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoProps[]>([]);

  let inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todoTask) {
      setTodoList([
        ...todoList,
        { todoId: Date.now(), todo: todoTask, isDone: false },
      ]);
    }
    setTodoTask("");
  };

  useEffect(() => {
    inputRef.current?.blur();
  }, [todoList]);

  return (
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
  );
};

export default InputField;
