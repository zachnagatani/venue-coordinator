import {createStore} from 'redux';
import venueCoordinator from './reducers';
import {
    STORE_VENUE, storeVenue,
    CLEAR_VENUES, clearVenues,
    LOGIN, login
} from './actions';
import {hashHistory} from 'react-router';

let store = createStore(venueCoordinator);

console.log(store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

// if (!store.getState().venues.length) {
//     hashHistory.push('/');
// }

hashHistory.listen(location => {
    console.log(location);
    if (location.pathname === '/venues' && !store.getState().venues.length) {
        hashHistory.push('/');
    }
});

export default store;