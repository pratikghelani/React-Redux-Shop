
 export const cartitem = (state = 0, action) => {
     switch(action.type) {
         case "incrementcart":
             return state + action.payload;
         case "decrememtcart":
            if(state <= 0 ){
                state = 0;  
            }
            else {
                state =  state - action.payload;
                if(state <= 0 ){
                    state = 0;  
                }
            }  
             return state;

         default:
            return state;
     }
 }

 export const cartprice = (state = 0, action) => {
    switch(action.type) {
        case "priceincrement":
            return state + action.payload;
        case "pricedecrement":
           if(state <= 0 ){
               state = 0;  
           }
           else {
               state =  state - action.payload;
               if(state <= 0 ){
                state = 0;  
            }
           }  
            return state;
        default:
           return state;
    }
}