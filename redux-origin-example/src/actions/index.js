//getData reducer

export const isLoading = () => {
  return {
    type: 'isLoading',
  };
};

export const isFetch = (data) => {
  return {
    type: 'isFetch',
    payload: data,
  };
};

export const isError = (data) => {
  return {
    type: 'isError',
    payload: data,
  };
};

//addToCart
export const add = (data) => {
  return {
    type: 'add',
    payload: data,
  };
};

export const clear = () => {
  return {
    type: 'clear',
  };
};

export const init = (data) => {
  return {
    type: 'init',
    payload: data,
  };
};
