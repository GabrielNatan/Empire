const initialState = {
    cart: []
  };
  export const addLoversReducer = (state = initialState, action) => {
    let a = action.payload

    if(state.cart.length === 0){
      if(localStorage.getItem("lovers")){
        state = JSON.parse(localStorage.getItem("lovers"))
         
        }
    }
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
          return {...state}
        }
        localStorage.setItem("lovers",JSON.stringify({...state,cart:[...state.cart,a.cart[0]]}))

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
        localStorage.setItem("lovers",JSON.stringify({...state,cart:newState}))

        return {
          ...state,
          cart:newState
        }
         
        break
      default:
        return state;
    }
  };