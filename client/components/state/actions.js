const STORE_VENUE = 'STORE_VENUE';
function storeVenue(venue) {
    return {
        type: STORE_VENUE,
        payload: {
            venue
        }
    };
}

const UPDATE_VENUE = 'UPDATE_VENUE';
function updateVenue(id, username, action) {
    return {
        type: UPDATE_VENUE,
        payload: {
            id,
            username,
            action
        }
    };
}

const CLEAR_VENUES = 'CLEAR_VENUES';
function clearVenues() {
    return {
        type: CLEAR_VENUES
    };
}

const LOGIN = 'LOGIN';
function login(username) {
    return {
        type: LOGIN,
        payload: {
            username: username
        }
    };
}

export {
    STORE_VENUE, storeVenue,
    UPDATE_VENUE, updateVenue,
    CLEAR_VENUES, clearVenues,
    LOGIN, login
};