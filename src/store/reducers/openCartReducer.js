const initialState = {
    open: false
  };
  export const openCartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CART_OPEN':
        return {
          ...state,
          open: true
        };
    break
      case 'CART_CLOSE':
          return{
              ...state,
              open: false
          }
      default:
        return state;
    }
  };