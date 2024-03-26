const initialData = {
  list: [],
};

export const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id,
            data,
          },
        ],
      };

    default:
      return state;
  }
};
