 const inicialState = 0;

 const cartitem = (state = inicialState, action) => {
     switch(action.type) {
         case "increment":
             return state + 1;

         case "decrememt":
            if(state <= 0 ){
                state = 0;  
            }
            else {
                state =  state - 1;
            }  
             return state;

         default:
            return state;
     }
 }



 export default cartitem ;
