import { SET_ITEM_NAV } from "../actions/shared";

export default function nav(state = {}, action) {
    switch(action.type) {
        case SET_ITEM_NAV:
            return {...state, itemNav: action.itemNav};
        default:
            return state;
    }
    
}