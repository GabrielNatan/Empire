const initialState = {
    cart: []
  };
  export const addLoversReducer = (state = initialState, action) => {
    let a = action.payload
    
    switch (action.type) {
      case 'ADD_LOVERS':
        let verifyAndAdd = false;
         state.cart.map(item=>{if(item.id === a.cart[0].id) {
           verifyAndAdd = true
          } else{
            return
          }
        })

        if(verifyAndAdd){
          console.log(state)
          return {...state}
        }

        return { 
              ...state,
              cart:[...state.cart,a.cart[0]]
            };  
        
    break
      case 'REMOVE_LOVERS':
        console.log(a)
        function isBigEnough(value) {
          console.log(value.id)
          return value.id !== a.cart[0].id;
        }
        
        let newState  = state.cart.filter(isBigEnough)
        return {
          ...state,
          cart:newState
        }
         
        break
      default:
        return state;
    }
  };