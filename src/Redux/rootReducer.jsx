import {combineReducers, createStore} from 'redux';
import { BurgerReducer } from './Reducer/BurgerReducer';
// Kho tổng của ứng dụng
const rootReducer = combineReducers({
    // Nơi chứa các reducer
    BurgerReducer,
});
export const store = createStore(rootReducer);