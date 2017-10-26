

export function updateSearch(text) {
  return { type: 'search', text }
}

export function addToCart(item) {
    //debugger
  return { type: 'addToCart', item }
}