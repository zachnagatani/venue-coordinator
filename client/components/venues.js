import React from 'react';
import SearchBar from './searchbar';
import SearchButton from './searchButton';
import Venue from './venue';

const Venues = props => {
    const VenueItems = props.venues.map(venue => {
        return <Venue key={venue.id}
            title={venue.name}
            subtitle={venue.location.address}
            count={venue.count}
            venueId={venue.id}
            user={props.user}
            handleClick={handleChipClick}/>
    });

    function handleChipClick(venueId, username) {
        console.log('clicked');
        fetch('/api/venue/increment', {
            method: 'PATCH',
            body: JSON.stringify({
                venueId: venueId,
                username: username
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json();
        }).then(json => {
            console.log(json);
            props.onChipClick(venueId, username);
        });
    }

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