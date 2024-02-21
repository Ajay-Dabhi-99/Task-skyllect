import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Delete_Icon from "../assets/svg/delete_button.svg";
import Edit_Icon from "../assets/svg/edit.svg";
import { deleteTodo } from "../Redux/Slices/TodoSlice";
import Modal from "../Common/Modal";
import EditTodo from "./EditTodo";

const TodoList = () => {
  const [editBox, setEditBox] = useState(false);
  const [todo, setTodo] = useState({});
  const todoItems = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <div className="w-1/2 h-full">
        <h3 className="text-xl font-semibold text-center my-5 overflow-y-hidden">
          Todo List
        </h3>
        <div className="max-w-2xl w-full mx-auto h-[550px] overflow-y-auto space-y-3 px-5">
          {todoItems?.map((todoData) => (
            <div key={todoData.id} className="w-full rounded-md border p-3">
              <div className="flex items-center justify-start">
                <div className="flex items-center justify-start space-x-3">
                  <button
                    onClick={() => handleDeleteTodo(todoData.id)}
                    type="button"
                  >
                    <img
                      src={Delete_Icon}
                      alt="Delete Icon"
                      className="w-5 h-5"
                      loading="lazy"
                    />
                  </button>
                  <button onClick={() => { setEditBox(true); setTodo(todoData) }} type="button">
                    <img src={Edit_Icon} alt="Edit Icon" className="w-5 h-5" loading="lazy"/>
                  </button>
                </div>
                <span className="block text-base font-normal text-black ml-5 truncate">
                  {todoData?.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={editBox}>
        <EditTodo handleClose={setEditBox} todo={todo} />
      </Modal>
    </>
  );
};

export default TodoList;
