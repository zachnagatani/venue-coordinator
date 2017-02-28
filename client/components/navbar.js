import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {open: false};
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <div>
                <AppBar title="Venue Coordinator" onLeftIconButtonTouchTap={this.handleToggle} />
                <Drawer open={this.state.open}>
                    <MenuItem>Hello, World</MenuItem>
                </Drawer>
            </div>
        );
    }
};

export default NavBar;