import React from "react";
import TodoList from "./components/todoList";
import NewTodoForm from "./components/newTodoForm";
import Auxiliary from "./components/auxiliariy";
import TodoStore from "./todoStore";
import "./App.scss";
const App = () => {
  return (
    <div className="container-app">
      <header className="app__header">
        <h1 className="app__header-app-title">todos</h1>
      </header>
      <main className="app-main">
        <NewTodoForm todoStore={TodoStore}></NewTodoForm>
        <TodoList todoStore={TodoStore}></TodoList>
        <Auxiliary todoStore={TodoStore}></Auxiliary>
      </main>
    </div>
  );
};
export default App;
