const STORE_VENUES = 'STORE_VENUES';
function storeVenues(venues) {
    return {
        type: STORE_VENUES,
        payload: {
            venues
        }
    };
}

export {STORE_VENUES, storeVenues};