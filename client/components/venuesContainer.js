import {connect} from 'react-redux';
import {updateVenue} from './state/actions';
import Venues from './venues';

const mapStateToProps = state => {
    return {
        user: state.user,
        venues: state.venues
    };
};

const mapDispatchtoProps = dispatch => {
    return {
        onChipClick: (id, username, action) => dispatch(updateVenue(id, username, action))
    };
};

const VenuesContainer = connect(mapStateToProps, mapDispatchtoProps)(Venues);

export default VenuesContainer;