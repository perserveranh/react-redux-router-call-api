import { combineReducers } from 'redux';
import products from './products';
import itemEditting from './itemEditting';

const rootReducers = combineReducers({
    products,
    itemEditting
});
export default rootReducers;