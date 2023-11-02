import { Box, ChakraProvider, Container, Heading, VStack } from '@chakra-ui/react';
import { TodoItemProps } from './components/TodoItem';
import TodoList from './components/TodoList';
import { useState } from 'react';


const TestItems: TodoItemProps[] = [
  {id: 1, text: 'Test1', isDone: false},
  {id: 2, text: 'Test2', isDone: false},
  {id: 3, text: 'Test3', isDone: true},
];

const App = () => {
  const [items, setItems] = useState(TestItems);

  const handleDelete = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  }

  const handleToggle = (id: number) => {
    setItems(items.map(item => item.id === id ? {...item, isDone: !item.isDone } : item));
  }

  const handleEdit = (id: number) => {
    id;
    // todo
  }

  return (
    <ChakraProvider>
      <Box alignItems="center" bg="gray.100" display="flex" justifyContent="center" minHeight="100vh">
        <Container bg="white" borderRadius="md" boxShadow="md" maxW="xl" p={8}>
          <VStack spacing={4}>
            <Heading as="h1" size="xl">
              To-Do List
            </Heading>
            <TodoList
              actions={{
                onDelete: handleDelete,
                onEdit: handleEdit,
                onToggle: handleToggle,
              }}
              items={items}
            />
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  )
};

export default App;
