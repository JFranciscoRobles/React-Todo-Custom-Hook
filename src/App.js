import useTodoList from "./hooks/useTodoList";
import AddTaskForm from "./components/AddTaskForm";
import TaskItem from "./components/TaskItem";
import { Flex, Heading } from "@chakra-ui/react";

function App() {
  const { todoData, headers, addTask, updateTask, deleteTask } = useTodoList();

  return (
    <Flex direction="column" alignItems="center">
      <Heading as="h1" size="3xl">
        Todo List
      </Heading>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header.key}>
                <Heading mt={5} mr={5} as="h3" size="lg">
                  {header.title}
                </Heading>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {todoData.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          ))}
        </tbody>
      </table>
      <AddTaskForm addTask={addTask} />
    </Flex>
  );
}

export default App;
