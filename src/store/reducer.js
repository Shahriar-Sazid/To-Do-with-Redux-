const initialState = {
  todoItems: [],
  incompleteCount: 0,
  mode: 'all',
  lastId: -1
};
const reducer = (state = initialState, action) => {
  if (action.type === 'ON_INPUT') {
    const item = action.value;
    item.id = state.lastId + 1;
    item.completed = false;
    const newTodoItems = [...state.todoItems, item];
    let incompleteCount = state.incompleteCount;
    incompleteCount = incompleteCount + 1;
    const newState = {
      ...state,
      incompleteCount: incompleteCount,
      todoItems: newTodoItems,
      lastId: item.id
    };
    return newState;
  } else if (action.type === 'ON_TICK') {
    const id = action.value;
    const items = [...state.todoItems];
    let incompleteCount = state.incompleteCount;
    const idx = items.findIndex(item => item.id === id);
    if (items[idx].completed) {
      items[idx].completed = false;
      incompleteCount = incompleteCount + 1;
    } else {
      items[idx].completed = true;
      incompleteCount = incompleteCount - 1;
    }
    const newState = {
      ...state,
      todoItems: items,
      incompleteCount
    };
    return newState;
  } else if (action.type === 'ON_CROSS') {
    const id = action.value;
    const items = [...state.todoItems];
    const idx = items.findIndex(item => item.id === id);
    let incompleteCount = state.incompleteCount;
    if (!items[idx].completed) {
      incompleteCount--;
    }
    items.splice(idx, 1);
    const newState = {
      ...state,
      todoItems: items,
      incompleteCount
    };
    return newState;
  } else if (action.type === 'ON_UPDATE') {
    const id = action.payload.id;
    const text = action.payload.text;
    const items = [...state.todoItems];
    const idx = items.findIndex(item => item.id === id);
    items[idx].text = text;
    const newState = {
      ...state,
      todoItems: items
    };
    return newState;
  } else if (action.type === 'ON_CLEAR_COMPLETED') {
    const items = [...state.todoItems];
    for (let i = 0; i < items.length; i++) {
      if (items[i].completed) {
        items.splice(i, 1);
        i--;
      }
    }
    const newState = {
      ...state,
      todoItems: items
    };
    return newState;
  } else if (action.type === 'SHOW_ALL') {
    return {
      ...state,
      mode: 'all'
    };
  } else if (action.type === 'SHOW_ACTIVE') {
    return {
      ...state,
      mode: 'active'
    };
  } else if (action.type === 'SHOW_COMPLETED') {
    return {
      ...state,
      mode: 'completed'
    };
  }
  return state;
};

export default reducer;
