import TodoItem, { TodoItemProps } from './TodoItem';
import { Box, VStack } from '@chakra-ui/react';


type TodoListProps = {
  items: TodoItemProps[];
};


const TodoList: React.FC<TodoListProps> = ({ items }) => {
  return (
    <Box width="100%">
      <VStack align="stretch" spacing={2}>
        {items.map((item, index) => <TodoItem key={index} {...item} />)}
      </VStack>
    </Box>
  );
};

export default TodoList;
