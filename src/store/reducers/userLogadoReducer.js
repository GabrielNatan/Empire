const initialState = {
    logado: false
  };
  export const userLogadoReducer = (state = initialState, action) => {
    
    
   
    switch (action.type) {
      case 'LOGAR':
        console.log("foii")
        return {
          ...state,
          logado: true
        };
    break
      case 'DESLOGAR':
          return{
              ...state,
              logado: false
          }
      default:
        return state;
    }
  };