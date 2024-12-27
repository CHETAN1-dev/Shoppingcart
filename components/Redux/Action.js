import {ADD_TO_CART , REMOVE_TO_CART} from './constant';
export function addTocart(items) {
  return {
    type: ADD_TO_CART,
    data: items,
  };
}
export function remove_to_cart(items){
  return{
    type: REMOVE_TO_CART,
    data : items,
  };
}
