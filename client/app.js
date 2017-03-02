import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import store from './components/state/store';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavBar from './components/navbar';
import Home from './components/home';
import Venues from './components/venues';
import Signup from './components/signup';
import Login from './components/login';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => {
    return (
        <MuiThemeProvider>
            <div>
                <NavBar />
                <Router history={hashHistory}>
                    <Route path="/" component={Home} />
                    <Route path="/venues" component={Venues} />
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