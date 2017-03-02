import {createStore} from 'redux';
import venueCoordinator from './reducers';
import {
    STORE_VENUE, storeVenue,
    CLEAR_VENUES, clearVenues
} from './actions';

let store = createStore(venueCoordinator);

// console.log(store.getState());

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );

export default store;