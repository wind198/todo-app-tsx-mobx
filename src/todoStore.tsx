import { action, computed, makeObservable, observable } from "mobx";

interface SingleTodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoStoreI {
  todoStore: TodoStoreCl;
}

class TodoStoreCl {
  todos: SingleTodo[] = [];
  constructor() {
    makeObservable(this, {
      todos: observable,
      completedTodoCount: computed,
      allTodoCount: computed,
      addTodo: action,
      removeTodo: action,
      removeAll: action,
      toggleTodo: action,
      toggleMultipleTodo: action,
    });
    this.todos = [
      { completed: false, id: 1, title: "Learn vue" },
      { completed: false, id: 2, title: "Trade" },
    ];
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.toggleMultipleTodo = this.toggleMultipleTodo.bind(this);
  }

  get completedTodoCount(): number {
    return this.todos.filter((todo) => todo.completed).length;
  }
  get allTodoCount(): number {
    return this.todos.length;
  }

  addTodo(title: string) {
    const item: SingleTodo = {
      id: Math.floor(new Date().getTime() / 1000),
      title,
      completed: false,
    };
    this.todos.push(item);
  }
  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
  removeAll() {
    this.todos = [];
  }
  toggleTodo(id: number) {
    this.todos.find((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return true;
      }
      return false;
    });
  }
  toggleMultipleTodo() {
    if (this.allTodoCount / 2 > this.completedTodoCount) {
      this.todos = this.todos.map((todo) => ({ ...todo, completed: true }));
      return;
    }
    this.todos = this.todos.map((todo) => ({ ...todo, completed: false }));
  }
}

export default new TodoStoreCl();
