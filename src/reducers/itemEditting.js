import * as Types from './../constants/ActionType';

var initialState = {};

const myReducers = (state = initialState, action) => {
    switch (action.type) {
        case Types.EDIT_PRODUCT:
            console.log(action);
            return action.product;
        default:
            return state;
    }
}
export default myReducers;