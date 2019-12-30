import { createAction } from '@reduxjs/toolkit'

export const addTodo = createAction('ADD_TODO')
export const removeTodo = createAction('REMOVE_TODO')
export const loadTodos = createAction('LOAD_TODOS')

export const ping = createAction('PING')
export const pong = createAction('PONG')
