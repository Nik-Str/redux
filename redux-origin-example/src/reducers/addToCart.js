const initialState = { data: [] };

const addToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add':
      return { data: [...state.data, action.payload] };
    case 'clear':
      return { ...initialState };
    case 'init':
      return { data: action.payload };
    default:
      return state;
  }
};

export default addToCartReducer;
