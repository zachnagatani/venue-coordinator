import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="main--signup">
                <h1>Sign Up</h1>
                <form className="form--signup">
                    <TextField hintText="Enter a username" floatingLabelText="Username" multiLine={true} id="username" name="username" />
                    <TextField hintText="Enter an email" floatingLabelText="Email" multiLine={true} id="email" name="email" type="email" />
                    <TextField hintText="Enter a password" floatingLabelText="Password" multiLine={true} id="password" name="password" type="password" />
                    <TextField hintText="Reenter your password" floatingLabelText="Reenter Password" multiLine={true} id="verify" name="verify" type="password" />
                    <RaisedButton label="Sign Up"/>
                </form>
            </main>
        );
    }
};

export default SignupForm;