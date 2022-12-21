import { useState } from "react";
import "./styles.css";
import Form from "./Form";
import TodoList from "./TodoList";
import { Box } from "@chakra-ui/react";

export default function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editFlg, setEditFlg] = useState(false);
  const [todoId, setTodoId] = useState(""); //todosのidをstate管理

  // 入力された値が変更された際都度更新
  const onChange = (e) => {
    setValue(e.target.value);
  };

  // todosの id を調べ、最大の id に+1して返す関数
  const getMaxId = (objArrs) => {
    let maxId = 0;
    if (objArrs.length === 0) {
      // console.log(maxId);
      return maxId;
    }
    objArrs.forEach((objArr) => {
      maxId = maxId < objArr.id ? objArr.id : maxId;
    });
    return ++maxId;
  };

  // 作成されたTodoをもとに追加する関数
  const addTodo = (todo) => {
    const newTodos = [...todos];
    setTodos([...newTodos, todo]);
  };

  // Todoを作成する関数
  const createTodo = () => {
    const id = getMaxId(todos);
    const createdTodo = { id: id, content: value };
    addTodo(createdTodo);
    setValue("");
  };

  // 編集フラグを切り替える関数
  const handleEditFlg = () => {
    setEditFlg((editFlg) => !editFlg);
  };

  // Todoの編集準備を行う関数
  const editTodo = (id) => {
    if (!editFlg) {
      handleEditFlg();
    }
    const newTodos = [...todos];
    const filteredNewTodos = newTodos.filter((newTodo) => {
      return id === newTodo.id;
    });
    setTodoId(id);
    setValue(filteredNewTodos[0].content);
  };

  // 編集したTodoをもとに、更新を実行する関数
  const updateTodo = () => {
    const newTodos = [...todos];
    newTodos.forEach((newTodo) => {
      if (todoId === newTodo.id) {
        newTodo.content = value;
      }
    });
    setTodos(newTodos);
    setValue("");
    if (editFlg) {
      handleEditFlg();
    }
  };

  // Todoの削除を実行する関数
  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const filteredNewTodos = newTodos.filter((newTodo) => {
      return id !== newTodo.id;
    });
    setTodos(filteredNewTodos);
  };

  return (
    <div className="App">
      <Box w="100%" p={6}>
        <Form
          value={value}
          onChange={onChange}
          createTodo={createTodo}
          updateTodo={updateTodo}
          editFlg={editFlg}
        />
        <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
      </Box>
    </div>
  );
}
