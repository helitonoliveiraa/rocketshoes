export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  }
}

/**
 * todo reducer recebe por padrão uma variável state e uma action
 */
