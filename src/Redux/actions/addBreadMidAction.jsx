import {ADD_BREADMID} from '../types/burgerType';
export const addBreadMidAction = (propsBurger,amount) => {
  return {
    type: ADD_BREADMID,
    propsBurger,
    amount,
  };

}