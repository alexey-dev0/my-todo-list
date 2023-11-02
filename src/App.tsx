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
      <Box bg="gray.100" minHeight="100vh" display="flex" alignItems="center" justifyContent="center">
        <Container maxW="xl" p={8} bg="white" boxShadow="md" borderRadius="md">
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
