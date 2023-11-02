import TodoItem, { TodoItemActions, TodoItemProps } from './TodoItem';
import { Box, VStack } from '@chakra-ui/react';


type TodoListProps = {
  items: TodoItemProps[];
  actions: TodoItemActions;
};


const TodoList: React.FC<TodoListProps> = ({ items, actions }) => {
  return (
    <Box width="100%">
      <VStack align="stretch" spacing={2}>
        {items.map(item => <TodoItem key={item.id} {...item} {...actions} />)}
      </VStack>
    </Box>
  );
};

export default TodoList;
