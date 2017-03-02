import { combineReducers } from 'redux';
import {
    STORE_VENUE, storeVenue,
    CLEAR_VENUES, clearVenues
} from './actions';

function venuesReducer(state = [], action) {
    switch(action.type) {
        case STORE_VENUE:
            return [
                ...state,
                action.payload.venue
            ];
        case CLEAR_VENUES:
            return [];
        default:
            return state;
    }
}

const venueCoordinator = combineReducers({
    venues: venuesReducer
});

export default venueCoordinator;

