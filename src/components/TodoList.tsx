import { observer } from 'mobx-react';
import TodoItem from './TodoItem';
import { Box, VStack } from '@chakra-ui/react';
import { TodoProps } from '../stores/TodoStore';
import { useTodoStore } from '../hooks/useTodoStore';


const TodoList: React.FC = observer(() => {
  const todoStore = useTodoStore();
  const items: TodoProps[] = todoStore.items;

  return (
    <Box width="100%">
      <VStack align="stretch" flexDir="column-reverse" spacing={2}>
        {items.map(item => (
          <TodoItem key={item.id} {...item} onDelete={todoStore.removeTodo} onToggle={todoStore.toggleTodo} />
        ))}
      </VStack>
    </Box>
  );
});

export default TodoList;
