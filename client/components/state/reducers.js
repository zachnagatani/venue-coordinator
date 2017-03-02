import { combineReducers } from 'redux';
import {
    STORE_VENUE, storeVenue,
    CLEAR_VENUES, clearVenues,
    LOGIN, login
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

function userReducer(state = {loggedIn: false, username: null}, action) {
    switch(action.type) {
        case LOGIN:
            return {
                loggedIn: true,
                username: action.payload.username
            };
        default:
            return state;
    }
}

const venueCoordinator = combineReducers({
    venues: venuesReducer,
    user: userReducer
});

export default venueCoordinator;

