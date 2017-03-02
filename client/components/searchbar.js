import React from 'react';
import TextField from 'material-ui/TextField';
import SearchButton from './searchButton';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        };

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    handleSearch(inputValue, event) {
        event.preventDefault();

        if (!inputValue) {
            return alert('Please enter city');
        }

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
                // TODO: SEND VENUES TO REDUX/Make api calls to store ID's in DB
                venues = json;
                console.log(venues);
            });
    }

    render() {
        return (
            <form>
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

export default SearchBar;