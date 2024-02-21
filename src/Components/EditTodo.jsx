import React, { useState } from "react";
import { editTodo } from "../Redux/Slices/TodoSlice";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const EditTodo = ({ todo, handleClose }) => {
  const dispatch = useDispatch();
  const { id, title } = todo;
  const [newTitle, setNewTitle] = useState(title);

  const handleEditTodo = (e) => {
    e.preventDefault();
    dispatch(editTodo({ id, newTitle }));
    handleClose(false);
  };

  // Handle input change for the new title
  const handleInputChange = (e) => {
    setNewTitle(e.target.value);
  };

  return (
    <div className="fixed inset-0 w-screen h-screen bg-[rgba(0,0,0,0.4)] flex backdrop-blur-[5px] z-50">
      <div className="max-w-[508px] w-full  m-auto bg-white rounded-3xl shadow-shadowbox p-8">
        <form className="max-w-md w-full h-auto space-y-3">
          <h4 className="text-xl text-center font-bold mb-5">Edit Todo</h4>
          <input
            type="text"
            name="title"
            value={newTitle}
            onChange={handleInputChange}
            placeholder="Enter Title"
            className="w-full text-base placeholder:text-gray-500 border rounded-md focus:outline-none py-2 px-3"
          />
          <div className="flex items-center justify-between space-x-5">
            <button
              type="submit"
              onClick={handleEditTodo}
              className="btn-primary"
            >
              Update Todo
            </button>
            <button
              type="button"
              onClick={() => handleClose(false)}
              className="btn-close"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

EditTodo.propTypes = {
  todo: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default EditTodo;
