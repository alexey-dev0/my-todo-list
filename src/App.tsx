import { Box, ChakraProvider, Container, Heading, VStack } from '@chakra-ui/react';
import TodoList from './components/TodoList';
import todoStore from './stores/TodoStore';
import { TodoStoreProvider } from './contexts/TodoStoreContext';
import AddTodoForm from './components/AddTodoForm';

const App = () => {
  return (
    <TodoStoreProvider store={todoStore}>
      <ChakraProvider>
        <Box alignItems="flex-start" bg="gray.100" display="flex" justifyContent="center" minHeight="100vh" py="10">
          <Container bg="white" borderRadius="md" boxShadow="md" maxW="xl" p={8}>
            <VStack spacing={4}>
              <Heading as="h1" size="xl">
                To-Do List
              </Heading>
              <AddTodoForm />
              <TodoList />
            </VStack>
          </Container>
        </Box>
      </ChakraProvider>
    </TodoStoreProvider>
  )
};

export default App;
