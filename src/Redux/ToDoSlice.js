import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.description = description;
      }
    },
    filterTasks: (state, action) => {
      state.tasks = state.tasks.filter((task) =>
        action.payload === 'done'
          ? task.isDone
          : action.payload === 'notDone'
          ? !task.isDone
          : true
      );
    },
  },
});

export const { addTask, toggleTask, editTask, filterTasks } = todoSlice.actions;
export default todoSlice.reducer;