import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {open: false};
        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    handleClose() {
        this.setState({open: false});
    }

    render() {
        return (
            <div className="navbar">
                <AppBar title="Venue Coordinator" onLeftIconButtonTouchTap={this.handleToggle} />
                <Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
                    <MenuItem onTouchTap={this.handleClose}>Hello, World</MenuItem>
                </Drawer>
            </div>
        );
    }
};

export default NavBar;