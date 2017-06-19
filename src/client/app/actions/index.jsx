let nextTodoID = 0;

export const addTodo = text => ({
  type: 'ADD_TODO',
  text,
  id: nextTodoID += 1,
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

export const clearAllTodo = () => ({
  type: 'CLEAR_ALL',
});

export const clearCompletedTodos = () => ({
  type: 'CLEAR_COMPLETED',
});
