export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOOGLE_TODO = 'TOOGLE_TODO'
export const SET_FILTER = 'SET_FILTER'

export const Filters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_UNCOMPLETED: 'SHOW_UNCOMPLETED'
}

let nextTodoId = 2
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    id
})

export const toogleTodo = (id) => ({
    type: 'TOOGLE_TODO',
    id
})

export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    filter
})