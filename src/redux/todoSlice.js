import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const collectionsList =
  localStorage.getItem('stateCollections') !== null
    ? JSON.parse(localStorage.getItem('stateCollections'))
    : [];

const currentCollectionID =
  localStorage.getItem('stateCollectionID') !== null
    ? JSON.parse(localStorage.getItem('stateCollectionID'))
    : '';

const saveToLocalStorage = (item, array) => {
  localStorage.setItem(item, JSON.stringify(array));
};

const findCollectionIndex = (state) =>
  state.collections.findIndex(
    (collection) => collection.id === state.collectionID
  );

const initialState = {
  collections: collectionsList,
  collectionID: currentCollectionID,
  isCreateNewCollection: false,
  currentColor: '',
  currentEmoji: '',
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

    setCollectionTitle: (state, action) => {
      const index = findCollectionIndex(state);

      state.collections[index].name = action.payload.name;
      saveToLocalStorage('stateCollections', state.collections);
    },

    setCollectionColor: (state, action) => {
      const index = findCollectionIndex(state);

      if (!state.isCreateNewCollection) {
        state.collections[index].color = action.payload;
      } else {
        state.currentColor = action.payload;
      }
      saveToLocalStorage('stateCollections', state.collections);
    },

    setCollectionEmoji: (state, action) => {
      const index = findCollectionIndex(state);

      if (!state.isCreateNewCollection) {
        state.collections[index].emoji = action.payload;
      } else {
        state.currentEmoji = action.payload;
      }
      saveToLocalStorage('stateCollections', state.collections);
    },

    setCollectionID: (state, action) => {
      state.collectionID = action.payload;
      saveToLocalStorage('stateCollectionID', state.collectionID);
    },

    deleteCollection: (state, action) => {
      const index = findCollectionIndex(state);
      state.collections = state.collections.filter(
        (collection) => collection.id !== action.payload
      );

      // collectionID is set here to switch to another collection when
      // one is deleted
      if (state.collections.length === 0) {
        state.collectionID = '';
      } else if (index === 0) {
        state.collectionID = state.collections[0].id;
      } else {
        state.collectionID = state.collections[index - 1].id;
      }

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

    toggleComplete: (state, action) => {
      const collectionIndex = state.collections.findIndex(
        (collection) => collection.id === state.collectionID
      );
      const taskIndex = state.collections[collectionIndex].tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.collections[collectionIndex].tasks[taskIndex].completed =
        action.payload.completed;

      saveToLocalStorage('stateCollections', state.collections);
    },

    changeTaskTitle: (state, action) => {
      const collectionIndex = state.collections.findIndex(
        (collection) => collection.id === state.collectionID
      );
      const taskIndex = state.collections[collectionIndex].tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.collections[collectionIndex].tasks[taskIndex].title =
        action.payload.title;
      saveToLocalStorage('stateCollections', state.collections);
    },

    deleteTask: (state, action) => {
      const index = state.collections.findIndex(
        (collection) => collection.id === state.collectionID
      );
      state.collections[index].tasks = state.collections[index].tasks.filter(
        (task) => task.id !== action.payload.id
      );
      saveToLocalStorage('stateCollections', state.collections);
    },
  },
});

export const {
  setIsCreateNewCollection,
  addCollection,
  setCollectionTitle,
  setCollectionColor,
  setCollectionEmoji,
  setCollectionID,
  deleteCollection,

  addTask,
  toggleComplete,
  changeTaskTitle,
  deleteTask,
} = todoSlice.actions;

export default todoSlice.reducer;
