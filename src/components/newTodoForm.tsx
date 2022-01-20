import React, { useState } from "react";
import TodoStore, { TodoStoreI } from "../todoStore";
import { observer } from "mobx-react";

interface Props extends TodoStoreI {}

const NewTodoForm: React.FC<Props> = ({ todoStore }) => {
  const { addTodo } = todoStore;

  const [newTodoTitle, setnewTodoTitle] = useState("");

  return (
    <form
      className="new-todo"
      onSubmit={(e) => {
        e.preventDefault();
      }}>
      <input
        type="text"
        className="input-field input-field--title"
        onChange={(e) => {
          setnewTodoTitle(e.target.value);
        }}
        value={newTodoTitle}
        onKeyUp={(e) => {
          console.log(e.code);

          if (e.code !== "Enter") {
            return;
          }
          addTodo(newTodoTitle);
          setnewTodoTitle("");
        }}
      />
    </form>
  );
};
export default observer(NewTodoForm);
