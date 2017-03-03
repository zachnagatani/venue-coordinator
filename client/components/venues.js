import React from 'react';
import {hashHistory} from 'react-router';
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
        if (!props.user.loggedIn) {
            hashHistory.push('/login');
            return;
        }

        fetch('/api/venue/going', {
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
            props.onChipClick(venueId, username, json.action);
        });
    }

    return (
        <div className="container container--venues">
            <div className="flex-grid">
                <SearchBar />
            </div>
            {VenueItems}
        </div>
    );
};

export default Venues;