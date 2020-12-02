import React, { useState } from "react";
import {
  Flex,
  Button,
  Heading,
  Input,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";

export default function AddTaskForm({ addTask }) {
  const [inputText, setInputText] = useState("");

  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);

  function handleNewTask(text) {
    if (text === "") {
      return;
    }
    addTask(text);
    setInputText("");
  }

  return (
    <Flex direction="column" mt={10}>
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Alert: Invalid name
            </AlertDialogHeader>
            <AlertDialogBody>Enter a Task Name</AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Ok
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <Heading as="h4" size="md">
        Add Task
      </Heading>
      <Flex>
        <Input
          placeholder="Task Name"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button
          colorScheme="blue"
          variant="solid"
          onClick={() => handleNewTask(inputText)}
        >
          Add task
        </Button>
      </Flex>
    </Flex>
  );
}
