import {FETCH_WEATHER} from '../actions/index';

export default function (state = null, action) {
    switch (action.type){
        case FETCH_WEATHER:
            console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
}