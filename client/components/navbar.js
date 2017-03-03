import React from 'react';
import AppBar from 'material-ui/AppBar';

const NavBar = props => {
    return (
        <div className="navbar">
            <AppBar title="Venue Coordinator"
                onLeftIconButtonTouchTap={this.handleToggle}
                showMenuIconButton={false}/>
        </div>
    );
};

export default NavBar;