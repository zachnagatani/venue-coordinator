import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavBar from './components/navbar';
import SearchBar from './components/searchbar';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => {
    return (
        <MuiThemeProvider>
            <div>
                <NavBar />
                <div className="flex-grid container">
                    <SearchBar />
                </div>
            </div>
        </MuiThemeProvider>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);