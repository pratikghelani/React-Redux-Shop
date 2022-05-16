const inicialState = 0;
const cartprice = (state = inicialState, action) => {
    switch(action.type) {
        case "incrementprice":
            return state + action.payload;

        case "decrememtprice":
            return state - action.payload;

        default:
           return state;
    }
}
export default cartprice;