import React from "react";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="w-full">
      <header className="flex items-center justify-center w-full h-[70px] text-2xl font-bold text-blue-700 text-center border-b">
        Todo App
      </header>
      <div className="w-full flex h-[calc(100vh-70px)]">
        <AddTodo />
        <TodoList />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
