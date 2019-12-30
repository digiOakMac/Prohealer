import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './root-reducer';
import rootEpic from "./root-epics";
import services from "../services";

export const epicMiddleware = createEpicMiddleware({
  dependencies: services
})

const initialState = {};

// create store
const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware],
  preloadedState: initialState
});

epicMiddleware.run(rootEpic)

// export store singleton instance
export default store;
