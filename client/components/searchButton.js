import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const SearchButton = props => {
    return (
        <RaisedButton label="Search" className="btn" primary={true} onClick={(event) => props.handleSearch(props.inputValue, event)}/>
    );
};

export default SearchButton;