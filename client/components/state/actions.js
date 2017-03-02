const STORE_VENUE = 'STORE_VENUE';
function storeVenue(venue) {
    return {
        type: STORE_VENUE,
        payload: {
            venue
        }
    };
}

const CLEAR_VENUES = 'CLEAR_VENUES';
function clearVenues() {
    return {
        type: CLEAR_VENUES
    };
}

export {
    STORE_VENUE, storeVenue,
    CLEAR_VENUES, clearVenues
};