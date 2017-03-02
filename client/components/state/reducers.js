import { combineReducers } from 'redux';
import {
    STORE_VENUE, storeVenue,
    UPDATE_VENUE, updateVenue,
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
            break;
        case UPDATE_VENUE:
            return state.map(venue => {
                if (venue.id === action.payload.id) {
                    return Object.assign({}, venue, {
                        count: venue.count + 1,
                        users: [...venue.users, action.payload.username]
                    });
                }

                return venue;
            });
            break;
        case CLEAR_VENUES:
            return [];
            break;
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

