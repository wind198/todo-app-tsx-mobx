import React from "react";
import { TodoStoreI } from "../todoStore";
import { observer } from "mobx-react";
interface Props extends TodoStoreI {}

const TodoList: React.FC<Props> = ({ todoStore }) => {
  const { todos: todoList, removeTodo, toggleTodo } = todoStore;

  const todoDomList = todoList.map((todo) => (
    <div className="single-todo" key={`todo-${todo.id}`}>
      <input
        type="checkbox"
        name="completed"
        id="completed"
        className="single-todo__completed-checkbox"
        onChange={(e) => {
          console.log(todo);

          toggleTodo(todo.id);
        }}
        checked={todo.completed}
      />
      <span
        className={`single-todo__title 
      ${todo.completed ? "single-todo__title--completed" : ""}
      `}>
        {todo.title}
      </span>
      <button
        className="single-todo__remove"
        onClick={(e) => {
          removeTodo(todo.id);
        }}>
        remove
      </button>
    </div>
  ));

  return <ul className="todo-list">{todoDomList}</ul>;
};
export default observer(TodoList);
