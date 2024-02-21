import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

console.log("todos", initialState.todos);
const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    // Add todo Reducer
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    // Delete todo Reducer
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    // Update todo Reducer
    editTodo: (state, action) => {
      const { id, newTitle } = action.payload;
      const todoToEdit = state.find((todo) => todo.id === id);
      if (todoToEdit) {
        todoToEdit.title = newTitle;
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
