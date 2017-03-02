import React from 'react';
import SearchBar from './searchbar';
import SearchButton from './searchButton';
import Venue from './venue';

const Venues = props => {
    const VenueItems = props.venues.map(venue => {
        return <Venue key={venue.id} title={venue.name}
            subtitle={venue.location.address}
            count={venue.count} />
    });

    return (
        <div className="container">
            <div className="flex-grid">
                <SearchBar />
            </div>
            {VenueItems}
        </div>
    );
};

export default Venues;