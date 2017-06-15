function addTodo(completed, text) {
  return {
    type: 'ADD',
    payload: {
      text: text,
      completed: completed,
      id:
    }
  }
}

export default addTodo;
