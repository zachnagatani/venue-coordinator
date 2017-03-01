import React from 'react';
import TextField from 'material-ui/TextField';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TextField hintText="Enter your city" floatingLabelText="Search for Venues" multiLine={true} className="col search-bar"  />
        );
    }
};

export default SearchBar;