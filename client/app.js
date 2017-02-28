import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HelloWorldComponent from './helloworldComponent';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => {
    return (
        <MuiThemeProvider>
            <HelloWorldComponent />
        </MuiThemeProvider>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);