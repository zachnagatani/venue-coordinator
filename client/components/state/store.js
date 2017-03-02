import {createStore} from 'redux';
import venueCoordinator from './reducers';
import {STORE_VENUES, storeVenues} from './actions';

let store = createStore(venueCoordinator);

console.log(store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(storeVenues(['poop']));

export default store;