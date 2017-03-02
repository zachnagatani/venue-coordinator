import {connect} from 'react-redux';
import Venues from './venues';

const mapStateToProps = state => {
    return {
        venues: state.venues
    };
};

const VenuesContainer = connect(mapStateToProps)(Venues);

export default VenuesContainer;