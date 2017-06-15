const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      state = {
        ...state,
        todos: [...state.todos, action.payload],
      };
      break;
    case 'REMOVE':
      break;
    case 'CLEAR':
      state = {
        todos: [],
      };
      nextTodoID = 0;
      break;
    case 'TOGGLE':
      break;
  }
  return state;
};

export default todoReducer;
