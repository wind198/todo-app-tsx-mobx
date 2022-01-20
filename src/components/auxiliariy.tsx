import React from "react";
import { TodoStoreI } from "../todoStore";
import { observer } from "mobx-react";
interface Props extends TodoStoreI {}
const Auxialary: React.FC<Props> = ({ todoStore }) => {
  const { allTodoCount, completedTodoCount, toggleMultipleTodo,removeAll } = todoStore;
  return (
    <div className="auxiliary">
      <div className="toolbar">
        <button
          onClick={() => {
            toggleMultipleTodo();
          }}
          className="toolbar__toggle-multiple">
          toggle all
        </button>
        <button
          onClick={() => {
            removeAll();
          }}
          className="toolbar__remove-all">
          remove all
        </button>
      </div>
      <div className="status">
        <span className="all-todo">{allTodoCount} total</span>
        <span className="completed-todo">{completedTodoCount} completed</span>
      </div>
    </div>
  );
};
export default observer(Auxialary);
