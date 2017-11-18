
export function addToCart(product){
    return { type: 'addToCart', product: product }
}

export function removeFromCart(product){
    return { type: 'removeFromCart', product: product }
}
