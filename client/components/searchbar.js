import React from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import {
    STORE_VENUE, storeVenue,
    CLEAR_VENUES, clearVenues
} from './state/actions';
import TextField from 'material-ui/TextField';
import SearchButton from './searchButton';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleInput(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    handleSearch(inputValue) {
        const self = this;

        if (!inputValue) {
            return alert('Please enter city');
        }

        this.props.dispatch(clearVenues());

        let venues;
        console.log('searching for ' + inputValue);

        /**
         * Calls endpoint on backend, which makes 3rd party Calls
         * Allows hiding of API authorization details via env variables
         */
        fetch('/api/foursquare/' + inputValue)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json()
            })
            .then(json => {
                // TODO: Make api calls to store ID's in DB
                venues = json;
                // Stores each venue in state/store, and adds each venue
                // to db if not there already
                venues.forEach(venue => {
                    fetch('/api/venue/add', {
                        'method': 'POST',
                        body: JSON.stringify({
                            'venueId': venue.id
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(response => {
                        return response.json();
                    }).then(json => {
                        venue.count = json.count;
                        venue.users = json.users;
                        this.props.dispatch(storeVenue(venue));
                    });
                });

                hashHistory.push('/venues');
            });
    }

    render() {
        return (
            <form method="POST" action="" onSubmit={(event) => {event.preventDefault(); this.handleSearch(this.state.inputValue);}}>
                <TextField hintText="Enter your city"
                    floatingLabelText="Search for Venues"
                    className="search-bar"
                    id="search"
                    name="search"
                    value={this.state.inputValue}
                    onChange={this.handleInput} />
                <SearchButton handleSearch={this.handleSearch} inputValue={this.state.inputValue} />
            </form>
        );
    }
};

SearchBar = connect()(SearchBar);

export default SearchBar;