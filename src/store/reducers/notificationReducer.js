const initialState = {
    open: false,
    message:""
  };
  export const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'NOTIFICATION_OPEN':
        
        return {
          ...state,
          open: true,
          message: action.payload.message
        };
    break
      case 'NOTIFICATION_CLOSE':
          return{
              ...state,
              open: false
          }
      default:
        return state;
    }
  };