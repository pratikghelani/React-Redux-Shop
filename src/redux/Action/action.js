export const increment = () => {
    return {
        type : "increment"
    }
}

export const decrement = () => {
    return {
        type : "decrememt"
    }
}

export const priceincrement = (price) => {
    return {
        type : "priceincrement",
        payload : price
    }
}

export const pricedecrement = (price) => {
    return {
        type : "pricedecrement",
        payload : price
    }   
}


