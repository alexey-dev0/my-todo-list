import React from 'react';
import TodoItem, { TodoItemProps } from './TodoItem';
import { Box, VStack } from '@chakra-ui/react';


type TodoListProps = {
  items: TodoItemProps[];
};


const TodoList: React.FC<TodoListProps> = ({ items }) => {
  return (
    <Box width="100%">
      <VStack spacing={2} align="stretch">
        {items.map(item => <TodoItem {...item} />)}
      </VStack>
    </Box>
  );
};

export default TodoList;
