import { Box, ChakraProvider, Container, Heading, VStack } from '@chakra-ui/react';
import { TodoItemProps } from './components/TodoItem';
import TodoList from './components/TodoList';


const items: TodoItemProps[] = [
  {text: 'Test1', isDone: false},
  {text: 'Test2', isDone: false},
  {text: 'Test3', isDone: true},
];

const App = () => {
  return (
    <ChakraProvider>
      <Box alignItems="center" bg="gray.100" display="flex" justifyContent="center" minHeight="100vh">
        <Container bg="white" borderRadius="md" boxShadow="md" maxW="xl" p={8}>
          <VStack spacing={4}>
            <Heading as="h1" size="xl">
              To-Do List
            </Heading>
            <TodoList items={items} />
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  )
};

export default App;
