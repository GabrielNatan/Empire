const initialState = {
    open: false
  };
  export const loversReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOVERS_OPEN':
        return {
          ...state,
          open: true
        };
    break
      case 'LOVERS_CLOSE':
          return{
              ...state,
              open: false
          }
      default:
        return state;
    }
  };