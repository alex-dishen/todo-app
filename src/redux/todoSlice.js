import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const items = localStorage.getItem('stateTasks') !== null 
? JSON.parse(localStorage.getItem('stateTasks')) 
: [];

const todoSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: items
    },
    reducers: {
        addTask: (state, action) => {
            const task = {
                id: uniqid(),
                title: action.payload.title,
                completed: false
            };
            state.tasks.push(task);
            localStorage.setItem('stateTasks', JSON.stringify(state.tasks));
        },

        toggleComplete: (state, action) => {
            const index = state.tasks.findIndex(
                task => task.id === action.payload.id
            );
            state.tasks[index].completed = action.payload.completed;
            localStorage.setItem('stateTasks', JSON.stringify(state.tasks));
        },

        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
            localStorage.setItem('stateTasks', JSON.stringify(state.tasks));
        },

        changeTitle: (state, action) => {
            const index = state.tasks.findIndex(
                task => task.id === action.payload.id
            );
            state.tasks[index].title = action.payload.title;
            localStorage.setItem('stateTasks', JSON.stringify(state.tasks));
        }
    }
});

export const { 
    addTask,
    toggleComplete,
    deleteTask,
    toggleChange,
    changeTitle
} = todoSlice.actions;

export default todoSlice.reducer;