import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="main--login">
                <h1>Login</h1>
                <form className="form--login">
                    <TextField hintText="Enter a username" floatingLabelText="Username" multiLine={true} id="username" name="username" />
                    <TextField hintText="Enter a password" floatingLabelText="Password" multiLine={true} id="password" name="password" type="password" />
                    <RaisedButton label="Sign Up"/>
                </form>
            </main>
        );
    }
};

export default LoginForm;