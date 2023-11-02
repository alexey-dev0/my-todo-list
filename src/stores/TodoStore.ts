import { action, makeObservable, observable } from "mobx";


export type TodoProps = {
  id: number;
  text: string;
  isDone: boolean;
}

export class TodoStore {
  items: TodoProps[] = [
    {id: 1, text: 'Test1', isDone: false},
  ];

  constructor() {
    makeObservable(this, {
      items: observable,
      addTodo: action,
      removeTodo: action,
      toggleTodo: action,
    });
  }

  addTodo = (text: string) => {
    this.items.push({
      id: this.items[this.items.length - 1]?.id ?? 1,
      text,
      isDone: false
    });
  }

  removeTodo = (id: number) => {
    this.items = this.items.filter(item => item.id !== id);
  }

  toggleTodo = (id: number) => {
    this.items = this.items.map(item => item.id === id ? {...item, isDone: !item.isDone } : item);
  }
}

const todoStore = new TodoStore();

export default todoStore;