import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
    console.log(action.payload);
    console.log("reducer called!")
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}