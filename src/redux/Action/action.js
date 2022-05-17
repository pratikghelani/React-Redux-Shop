export const incrementcart = (numb) => {
    return {
        type : "incrementcart",
        payload : numb
    }
}

export const decrementcart = (numb) => {
    return {
        type : "decrememtcart",
        payload : numb
    }
}

export const priceincrement = (numb) => {
    return {
        type : "priceincrement",
        payload : numb
    }
}

export const pricedecrement = (numb) => {
    return {
        type : "pricedecrement",
        payload : numb
    }   
}