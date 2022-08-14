import React, { useEffect, useState } from "react";
import Button from "./button";
import TodoDisplay from "./todoDisplay";
import TodoInput from "./todoInput";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [check, setCheck] = useState(false);
  const [currentTodo, setCurrentTodo] = useState("");

  const handleClick = (e) => {
    if (todo !== "" && !todoList.includes(todo)) {
      setTodoList([...todoList, { todo: todo, strike: false }]);
      setTodo("");
    }
  };
  const inputHandle = (e) => {
    setTodo(e.target.value);
  };
  const handleEdit = (index) => {
    setCheck(true);
    setCurrentTodo(index);
    todoList.map((data) =>
      todoList[index].todo === data.todo ? setTodo(data.todo) : null
    );
  };
  const strikethrough = (todoName) => {
    // const id=document.getElementById(index)
    // if (id.style.textDecorationLine !== "line-through") {
    //   id.style.textDecorationLine = "line-through";
    // } else id.style.textDecorationLine = "";
    let newArr = [];
    for (let i in todoList) {
      if (todoList[i].todo == todoName) {
        newArr.push({ todo: todoList[i].todo, strike: !todoList[i].strike });
      } else newArr.push({ ...todoList[i] });
    }
    setTodoList(newArr);
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  const addit = () => {
    const newArr = todoList.map((data) =>
      data.todo === todoList[currentTodo].todo ? { ...data, todo: todo } : data
    );
    console.log(newArr);
    setTodoList(newArr);
    setCheck(false);
    setTodo("");
  };
  const deleteEntry = (index) => {
    let newArr = todoList.filter((task) => task.todo !== todoList[index].todo);
    // let newArr=[]
    // for(let i of todoList){
    //     if(i!==todoList[index]){
    //         newArr.push(i)
    //     }
    // }
    setTodoList(newArr);
  };

  return (
    <div className="todo">
      <TodoInput inputHandle={inputHandle} todo={todo} />
      <Button handleClick={handleClick} addit={addit} check={check} />
      <TodoDisplay
        todoList={todoList}
        handleEdit={handleEdit}
        deleteEntry={deleteEntry}
        strikethrough={strikethrough}
      />
    </div>
  );
};

export default Todo;
