import { combineReducers } from 'redux';
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";

export const todos = createReducer([], {
  [actions.addTodo]: (state, action) => { state.push(action.payload)},
  [actions.removeTodo]: (state, action) => {},
  [actions.loadTodos]: (state, action) => {}
})

export const ping = createReducer({ isPinging: false }, {
  [actions.ping]: (state, action) => { state.isPinging = true },
  [actions.pong]: (state, action) => { state.isPinging = false }
})

const todosReducer = combineReducers({
  todos,
  ping
})

export default todosReducer
