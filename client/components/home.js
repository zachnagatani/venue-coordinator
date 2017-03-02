import React from 'react';
import SearchBar from './searchbar';
import SearchButton from './searchButton';

const Home = props => {
    return (
        <div className="container">
            <div className="container--home">
                <SearchBar />
            </div>
        </div>
    );
};

export default Home;