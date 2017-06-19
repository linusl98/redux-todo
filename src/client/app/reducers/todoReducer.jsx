const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case 'CLEAR_COMPLETED':
      return state.filter(todo =>
      todo.completed === false);
    case 'CLEAR_ALL':
      return [];
    case 'TOGGLE_TODO':
      return state.map(todo =>
      (action.id === todo.id)
      ? { ...todo, completed: !todo.completed } : todo);
    default:
      return state;
  }
};

export default todoReducer;
