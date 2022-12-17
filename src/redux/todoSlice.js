import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const collectionsList =
  localStorage.getItem('stateCollections') !== null
    ? JSON.parse(localStorage.getItem('stateCollections'))
    : [];

const tasksList =
  localStorage.getItem('stateTasks') !== null
    ? JSON.parse(localStorage.getItem('stateTasks'))
    : [];

const saveToLocalStorage = (item, array) => {
  localStorage.setItem(item, JSON.stringify(array));
};

const initialState = {
  collections: collectionsList,
  tasks: tasksList,
  collectionID: '',
  isCreateNewCollection: false,
};

const todoSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const collection = {
        id: uniqid(),
        color: action.payload.color,
        emoji: action.payload.emoji,
        name: action.payload.name,
        tasks: tasksList,
      };
      state.collections = [...state.collections, collection];
      saveToLocalStorage('stateCollections', state.collections);
    },

    addTask: (state, action) => {
      const task = {
        id: uniqid(),
        title: action.payload.title,
        completed: false,
      };
      state.tasks = [...state.tasks, task];
      saveToLocalStorage('stateTasks', state.tasks);
    },

    toggleComplete: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.tasks[index].completed = action.payload.completed;
      saveToLocalStorage('stateTasks', state.tasks);
    },

    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      saveToLocalStorage('stateTasks', state.tasks);
    },

    changeCollectionTitle: (state, action) => {
      const index = state.collections.findIndex(
        (collection) => collection.id === action.payload.id
      );
      state.collections[index].name = action.payload.name;
      saveToLocalStorage('stateCollections', state.collections);
    },

    changeTaskTitle: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.tasks[index].title = action.payload.title;
      saveToLocalStorage('stateTasks', state.tasks);
    },

    setCollectionID: (state, action) => {
      state.collectionID = action.payload;
    },

    setIsCreateNewCollection: (state, action) => {
      state.isCreateNewCollection = action.payload;
    },
  },
});

export const {
  addCollection,
  addTask,
  toggleComplete,
  deleteTask,
  toggleChange,
  changeCollectionTitle,
  changeTaskTitle,
  setCollectionID,
  setIsCreateNewCollection,
} = todoSlice.actions;

export default todoSlice.reducer;
