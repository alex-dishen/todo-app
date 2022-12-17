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
    setIsCreateNewCollection: (state, action) => {
      state.isCreateNewCollection = action.payload;
    },

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
    },

    setCollectionID: (state, action) => {
      state.collectionID = action.payload;
      saveToLocalStorage('stateCollectionID', state.collectionID);
    },

    updateCollection: (state, action) => {
      const index = state.collections.findIndex(
        (collection) => collection.id === currentCollectionID
      );

      if (action.payload.name) {
        state.collections[index].name = action.payload.name;
      } else {
        state.collections[index].emoji = action.payload.emoji;
      }
      saveToLocalStorage('stateCollections', state.collections);
    },

    deleteCollection: (state, action) => {
      state.collections = state.collections.filter(
        (collection) => collection.id !== action.payload
      );
      // collectionID is set here to prevent app from crashing after
      // collection was deleted or if there are no collections
      state.collectionID =
        state.collections.length === 0 ? '' : state.collections[0].id;

      saveToLocalStorage('stateCollectionID', state.collectionID);
      saveToLocalStorage('stateCollections', state.collections);
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

    // ?????
    toggleComplete: (state, action) => {
      const collectionIndex = state.collections.findIndex(
        (collection) => collection.id === currentCollectionID
      );
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      // console.log(state.collections[collectionIndex]);
      state.collections[collectionIndex].tasks[taskIndex].completed =
        action.payload.completed;
      // saveToLocalStorage('stateTasks', state.tasks);
    },

    // ?????
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      saveToLocalStorage('stateTasks', state.tasks);
    },

    // ??????
    changeTaskTitle: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      console.log(state.tasks[index].title);
      state.tasks[index].title = action.payload.title;
      // saveToLocalStorage('stateTasks', state.tasks);
    },
  },
});

export const {
  setIsCreateNewCollection,
  addCollection,
  setCollectionID,
  updateCollection,
  deleteCollection,

  addTask,
  toggleComplete,
  changeTaskTitle,
  deleteTask,
} = todoSlice.actions;

export default todoSlice.reducer;
