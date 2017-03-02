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

        let venues;
        console.log('searching for ' + inputValue);
        fetch('/api/foursquare/' + inputValue)
            .then(response => {
                return response.json()
            })
            .then(json => {
                venues = JSON.parse(json).response.venues;
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