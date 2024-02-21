import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todoReducer from "./Slices/TodoSlice";

// Combine reducers
const rootReducer = combineReducers({
  todoList: todoReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todoList"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
});

export const persistor = persistStore(store);
export default store;
