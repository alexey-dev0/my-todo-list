import React, { createContext, ReactNode } from 'react';
import { TodoStore } from '../stores/TodoStore';

export const TodoStoreContext = createContext<TodoStore | undefined>(undefined);

interface TodoStoreProviderProps {
  children: ReactNode;
  store: TodoStore;
}

export const TodoStoreProvider: React.FC<TodoStoreProviderProps> = ({ children, store }) => {
  return (
    <TodoStoreContext.Provider value={store}>{children}</TodoStoreContext.Provider>
  );
};