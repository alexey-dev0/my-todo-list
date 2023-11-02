import { useContext } from 'react';
import { TodoStoreContext } from '../contexts/TodoStoreContext';


export const useTodoStore = () => {
  const context = useContext(TodoStoreContext);
  if (context === undefined) {
    throw new Error('useTodoStore must be used within a TodoStoreProvider');
  }
  return context;
};