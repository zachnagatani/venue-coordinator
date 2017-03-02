import { combineReducers } from 'redux';
import {STORE_VENUES, storeVenue} from './actions';

function venuesReducer(state = [], action) {
    switch(action.type) {
        case STORE_VENUES:
            return [
                ...state,
                action.payload.venues
            ]
        default:
            return state;
    }
}

const venueCoordinator = combineReducers({
    venues: venuesReducer
});

export default venueCoordinator;

