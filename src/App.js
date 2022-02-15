import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  //新規のTodo(state)
  const [todoText, setTodoText] = useState("");
  //未完了のTodo(state)
  const [imcomplateTodos, setImcomplateTodos] = useState([]);
  //完了したTodo(state)
  const [complateTodos, setComplateTodos] = useState([]);

  //新規のTodoが追加されたときtodoTextを更新する
  const newTextTodo = (event) => setTodoText(event.target.value);

  //新規Todo追加時
  const onClickAdd = () => {
    if (todoText === "") return;
    const newImcomplateTodos = [...imcomplateTodos, todoText];

    setImcomplateTodos(newImcomplateTodos);
    setTodoText("");
  };

  //削除ボタン押下時
  const onClickDelete = (index) => {
    const deleteImcomplateTodos = [...imcomplateTodos];
    deleteImcomplateTodos.splice(index, 1);

    setImcomplateTodos(deleteImcomplateTodos);
  };

  //完了ボタン押下時
  const onClickComplate = (index) => {
    const deleteImcomplateTodos = [...imcomplateTodos];
    const newComplateTodos = [...complateTodos, deleteImcomplateTodos[index]];
    deleteImcomplateTodos.splice(index, 1);

    setImcomplateTodos(deleteImcomplateTodos);
    setComplateTodos(newComplateTodos);
  };

  //戻すボタン押下時
  const onClickBack = (index) => {
    const deleteComplateTodos = [...complateTodos];
    const newImcomplateTodos = [...imcomplateTodos, deleteComplateTodos[index]];
    deleteComplateTodos.splice(index, 1);

    setImcomplateTodos(newImcomplateTodos);
    setComplateTodos(deleteComplateTodos);
  };

  return (
    <React.Fragment>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={newTextTodo}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="imcomplate-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {imcomplateTodos.map((todo, index) => {
            return (
              //map関数内でdivなどを使用するときはkeyを付与すること
              <div key={index} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplate(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complate-area">
        <p className="title">完了したTODO</p>
        <ul>
          {complateTodos.map((todo, index) => {
            return (
              //map関数内でdivなどを使用するときはkeyを付与すること
              <div key={index} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};
