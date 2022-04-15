const initialState = { data: [], isLoading: false, isError: false };

const getDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'isLoading':
      return { ...initialState, isLoading: true };
    case 'isFetch':
      return { ...initialState, data: action.payload };
    case 'isError':
      return { ...initialState, isError: action.payload };
    default:
      return state;
  }
};

export default getDataReducer;
