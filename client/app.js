import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import store from './components/state/store';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import auth from './services/auth';
import {login} from './components/state/actions';
import NavBar from './components/navbar';
import Home from './components/home';
import VenuesContainer from './components/venuesContainer';
import Signup from './components/signup';
import Login from './components/login';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


// Checks login on app load for persistence
function checkLoginAndDispatch() {
    if (auth.isLoggedIn()) {
        store.dispatch(login(auth.currentUser()));
    }
}
checkLoginAndDispatch();

const App = () => {
    return (
        <MuiThemeProvider>
            <div>
                <NavBar />
                <Router history={hashHistory}>
                    <Route path="/" component={Home} />
                    <Route path="/venues"
                        component={VenuesContainer}
                        onEnter={() => {
                            if (!store.getState().venues.length) {
                                hashHistory.push('/');
                            }
                        }} />
                    <Route path="/signup" component={Signup}/>
                    <Route path="/login" component={Login}/>
                </Router>
            </div>
        </MuiThemeProvider>
    );
};

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);