const initialState = {
    cart: [],
    subtotal:10
  };
  export const addCartReducer = (state = initialState, action) => {
    let a = action.payload
    let subtotal = [];    
    let reducer = (acc,newacc)=>{return acc + newacc}

    switch (action.type) {
      case 'ADD_CART':
        let verifyAndAdd = false;
         state.cart.map(item=>{
           if(item.id === a.cart[0].id) {
           verifyAndAdd = true
            item.quant++
          } else{
            return
          }
        })
        
        
        if(state.cart.length > 0){
          let total = state.cart.map(cada=>{
            let totalSoma = 0;
            totalSoma = cada.price * cada.quant
            return totalSoma
          })
          subtotal.push(total.reduce(reducer))
        
        
        }
    
        if(verifyAndAdd){
          return {...state,subtotal:subtotal[0]}
        }

        if(state.cart.length === 0){
          return { 
            ...state,
            cart:[...state.cart,a.cart[0]],
            subtotal:  Number(subtotal  + a.cart[0].price)
          };  
        }else{
          return { 
            ...state,
            cart:[...state.cart,a.cart[0]],
            subtotal: Number(subtotal[0] + a.cart[0].price)
            };  
        }
        
    break
      case 'REMOVE_CART':

        function isBigEnough(value) {
          if(value.quant > 1){
            if(value.id === a.cart[0].id){
              value.quant = value.quant- 1
            }
            return value
          }else{
            if(value.id === a.cart[0].id){
              value.quant = value.quant- 1
            }
            return value.id !== a.cart[0].id;
          }

        }
        let newState  = state.cart.filter(isBigEnough)
        state.cart = newState
        if(state.cart.length > 0){
          let total = state.cart.map(cada=>{
            let totalSoma = 0;
            totalSoma = cada.price * cada.quant
            return totalSoma
          })
          subtotal.push(total.reduce(reducer))
        
        
        }

        return {
          ...state,
          subtotal:subtotal[0]
        }

        break
        case 'REMOVE_All':
          state.cart = []
          return state  
        break
      default:
        return state;
    }
  };