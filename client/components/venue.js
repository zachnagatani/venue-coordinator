import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';

const Venue = props => {
    return (
        <Card className="venue">
            <CardTitle title={props.title} subtitle={props.subtitle} />
            <CardActions className="clearfix">
                <Chip className="going-chip" onClick={() => props.handleClick(props.venueId, props.user.username)}>{props.count} Going</Chip>
            </CardActions>
        </Card>
    );
};

export default Venue;