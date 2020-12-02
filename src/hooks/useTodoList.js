import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function useTodoList() {
  const [todoData, setTodoData] = useState([]);

  const headers = [
    {
      key: 1,
      title: "Task Name",
    },
    {
      key: 2,
      title: "Task Status",
    },
    {
      key: 3,
      title: "Options",
    },
  ];

  const addTask = (taskName) => {
    let newTask = {
      id: uuidv4(),
      name: taskName,
      isCompleted: false,
    };
    const newTodoList = [...todoData, newTask];
    setTodoData(newTodoList);
  };

  function updateTask(id) {
    const newTodo = [...todoData];
    newTodo.map((task) =>
      task.id === id ? (task.isCompleted = !task.isCompleted) : task
    );
    setTodoData(newTodo);
  }

  const deleteTask = (id) => {
    const newList = todoData.filter((item) => {
      return item.id !== id;
    });
    setTodoData(newList);
  };

  return {
    todoData,
    addTask,
    updateTask,
    deleteTask,
    headers,
  };
}

export default useTodoList;
