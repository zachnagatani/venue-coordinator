import React from 'react';
import SearchBar from './searchbar';
import SearchButton from './searchButton';
import Venue from './venue';

const Venues = props => {
    return (
        <div className="container">
            <div className="flex-grid">
                <SearchBar />
                <SearchButton />
            </div>
            <Venue title="My Title" subtitle="My subtitle"
                text="Bacon ipsum dolor amet tongue venison doner, brisket meatloaf kevin turkey flank boudin."
                imgSrc="https://s-media-cache-ak0.pinimg.com/originals/84/cc/ca/84cccafae9fead96b47b73f0f946a502.jpg"
             />
            <Venue title="My Title" subtitle="My subtitle"
                text="Bacon ipsum dolor amet tongue venison doner, brisket meatloaf kevin turkey flank boudin."
                imgSrc="https://s-media-cache-ak0.pinimg.com/originals/84/cc/ca/84cccafae9fead96b47b73f0f946a502.jpg"
             />
            <Venue title="My Title" subtitle="My subtitle"
                text="Bacon ipsum dolor amet tongue venison doner, brisket meatloaf kevin turkey flank boudin."
                imgSrc="https://s-media-cache-ak0.pinimg.com/originals/84/cc/ca/84cccafae9fead96b47b73f0f946a502.jpg"
             />
        </div>
    );
};

export default Venues;