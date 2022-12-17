import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const collectionsList =
  localStorage.getItem('stateCollections') !== null
    ? JSON.parse(localStorage.getItem('stateCollections'))
    : [];

const saveToLocalStorage = (item, array) => {
  localStorage.setItem(item, JSON.stringify(array));
};

const currentCollectionID =
  localStorage.getItem('stateCollectionID') !== null
    ? JSON.parse(localStorage.getItem('stateCollectionID'))
    : '';

const initialState = {
  collections: collectionsList,
  collectionID: currentCollectionID,
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
        tasks: [],
      };
      state.collections = [...state.collections, collection];
      saveToLocalStorage('stateCollections', state.collections);
      console.log(collectionsList);
    },

    addTask: (state, action) => {
      const collectionIndex = state.collections.findIndex(
        (collection) => collection.id === state.collectionID
      );
      const task = {
        id: uniqid(),
        title: action.payload.title,
        completed: false,
      };

      state.collections[collectionIndex].tasks = [
        ...state.collections[collectionIndex].tasks,
        task,
      ];
      saveToLocalStorage('stateCollections', state.collections);
    },

    toggleComplete: (state, action) => {
      const collectionIndex = state.collections.findIndex(
        (collection) => collection.id === state.collectionID
      );
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      console.log(state.collections[collectionIndex]);
      state.collections[collectionIndex].tasks.completed =
        action.payload.completed;
      // saveToLocalStorage('stateTasks', state.tasks);
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
      console.log(state.tasks[index].title);
      state.tasks[index].title = action.payload.title;
      // saveToLocalStorage('stateTasks', state.tasks);
    },

    setCollectionID: (state, action) => {
      state.collectionID = action.payload;
      saveToLocalStorage('stateCollectionID', state.collectionID);
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
