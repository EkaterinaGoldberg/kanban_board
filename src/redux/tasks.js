import { createSlice } from "@reduxjs/toolkit";

const tasks = createSlice({
  name: "tasks",
  initialState: {
    inProcess: {
      name: "inProcess",
      inAdd: false,
      tasks: [],
    },
    inCheck: {
      name: "inCheck",
      inAdd: false,
      tasks: [],
    },
    done: {
      name: "done",
      inAdd: false,
      tasks: [],
    },
  },
  reducers: {
    setInAddProcess: (state, { payload }) => {
      state.inProcess.inAdd = payload.status;
    },
    setInAddCheck: (state, { payload }) => {
      state.inCheck.inAdd = payload.status;
    },
    setInAddDone: (state, { payload }) => {
      state.done.inAdd = payload.status;
    },
    addTaskInProcess: (state, { payload }) => {
      state.inProcess.tasks = [
        ...state.inProcess.tasks,
        { title: payload.title, task: payload.task },
      ];
    },
    addTaskInCheck: (state, { payload }) => {
      state.inCheck.tasks = [
        ...state.inCheck.tasks,
        { title: payload.title, task: payload.task },
      ];
    },
    addTaskDone: (state, { payload }) => {
      state.done.tasks = [
        ...state.done.tasks,
        { title: payload.title, task: payload.task },
      ];
    },
    setBoardInProcess: (state, { payload }) => {
      state.inProcess.tasks = payload.board;
    },
    setBoardInCheck: (state, { payload }) => {
      state.inCheck.tasks = payload.board;
    },
    setBoardDone: (state, { payload }) => {
      state.done.tasks = payload.board;
    },
    changeInProcess: (state, { payload }) => {
      state.inProcess.tasks[payload.index].title = payload.title;
      state.inProcess.tasks[payload.index].task = payload.task;
    },
    changeInCheck: (state, { payload }) => {
      state.inCheck.tasks[payload.index].title = payload.title;
      state.inCheck.tasks[payload.index].task = payload.task;
    },
    changeDone: (state, { payload }) => {
      state.done.tasks[payload.index].title = payload.title;
      state.done.tasks[payload.index].task = payload.task;
    },
  },
});

export default tasks.reducer;

export const {
  setInAddCheck,
  setInAddDone,
  setInAddProcess,
  addTaskDone,
  addTaskInCheck,
  addTaskInProcess,
  setBoardDone,
  setBoardInProcess,
  setBoardInCheck,
  changeInCheck,
  changeDone,
  changeInProcess,
} = tasks.actions;

export const inProcessSelector = (state) => state.tasks.inProcess;
export const inCheckSelector = (state) => state.tasks.inCheck;
export const doneSelector = (state) => state.tasks.done;
