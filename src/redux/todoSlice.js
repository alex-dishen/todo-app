import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const todoSlice = createSlice({
    name: "tasks",
    initialState: [
        { id: 1, title: 'todo1', completed: false },
        { id: 2, title: 'todo2', completed: false },
        { id: 3, title: 'todo3', completed: false },
        { id: 4, title: 'todo4', completed: true },
    ],
    reducers: {
        addTask: (state, action) => {
            const task = {
                id: uniqid(),
                title: action.payload.title,
                completed: false
            };
            state.push(task);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                task => task.id === action.payload.id
            );
            state[index].completed = action.payload.completed;
        },
        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload.id)
        }
    }
});

export const { 
    addTask,
    toggleComplete,
    deleteTask
} = todoSlice.actions;

export default todoSlice.reducer;