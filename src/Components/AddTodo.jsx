import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Slices/TodoSlice";
import { toast } from "react-toastify";

const AddTodo = () => {
  const dispatch = useDispatch();

  const [todoList, setTodoList] = useState({
    id: new Date().toISOString(),
    title: "",
  });

  // onChange Event
  const handleInputChange = (key, value) => {
    setTodoList((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  // Add Todo
  const handleTodoAdd = (e) => {
    e.preventDefault();
    if(todoList.title !== ''){
      dispatch(addTodo(todoList));
      setTodoList((prevState) => ({
        ...prevState,
        id: new Date().toISOString(),
        title: "",
      }));
    }else{
      toast.warning("Fill The Title.")
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-1/2 h-full border-r-[2px] px-5">
      <form className="max-w-md w-full rounded-md shadow-md border space-y-3 p-5">
        <h4 className="text-xl text-center font-bold mb-5">Add Todo</h4><input
          type="text"
          name="title"
          value={todoList.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
          placeholder="Enter Title"
          className="w-full text-base placeholder:text-gray-500 border rounded-md focus:outline-none py-2 px-3"
        />
        <button type="submit" onClick={handleTodoAdd} className="btn-primary">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
