const STORE_VENUE = 'STORE_VENUE';
function storeVenue(venue) {
    return {
        type: STORE_VENUE,
        payload: {
            venue
        }
    };
}

export {STORE_VENUE, storeVenue};