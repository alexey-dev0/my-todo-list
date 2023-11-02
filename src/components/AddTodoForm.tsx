import { FormControl, Input, Button, Box, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { useTodoStore } from "../hooks/useTodoStore";

const AddTodoForm: React.FC = () => {
  const [newTodo, setNewTodo] = useState<string>('');
  const todoStore = useTodoStore();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      todoStore.addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <Box width="100%">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <HStack spacing={4}>
            <Input
              placeholder="Enter new task"
              type="text"
              value={newTodo}
              onChange={handleInputChange}
            />
            <Button colorScheme="teal" type="submit">
              Add
            </Button>
          </HStack>
        </FormControl>
      </form>
    </Box>
  );
}

export default AddTodoForm;