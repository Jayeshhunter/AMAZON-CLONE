export const initialState = {
  basket: [],
  user: null,
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding a basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      // Logic for removing a basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Can't remove product as it's not there in the basket");
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
