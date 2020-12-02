import React from "react";
import { Button, Checkbox, Text } from "@chakra-ui/react";

export default function TaskItem({ task, updateTask, deleteTask }) {
  function handleDeleteTask(id) {
    deleteTask(id);
  }

  function handleUpdateTask(id) {
    updateTask(id);
  }

  return (
    <tr>
      <td>
        <Text fontSize="xl">{task.name}</Text>
      </td>
      <td>
        <Checkbox
          size="lg"
          value={task.isCompleted}
          onChange={() => handleUpdateTask(task.id)}
        >
          {task.isCompleted ? "Completed" : "Incomplete"}
        </Checkbox>
      </td>
      <td>
        <Button colorScheme="red" onClick={() => handleDeleteTask(task.id)}>
          Delete Task
        </Button>
      </td>
    </tr>
  );
}
