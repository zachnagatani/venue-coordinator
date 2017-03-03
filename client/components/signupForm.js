import React from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import auth from '../services/auth';
import {LOGIN, login} from './state/actions';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            verify: ''
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field, event) {
        switch (field) {
            case 'username':
                this.setState({
                    username: event.target.value
                });
                break;
            case 'email':
                this.setState({
                    email: event.target.value
                });
                break;
            case 'password':
                this.setState({
                    password: event.target.value
                });
                break;
            case 'verify':
                this.setState({
                    verify: event.target.value
                });
                break;
            default:
                return this.state;
        }
    }

    handleSubmit(username, email, password, verify, event) {
        fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                verify: verify
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (!response.ok) {
                console.log(response);
                return;
            }
            return response.json();
        }).then(token => {
            console.log(token);
            auth.saveToken(token);

            if (auth.isLoggedIn()) {
                this.props.dispatch(login(username));
            }

            hashHistory.push('/venues');
        });
    }

    render() {
        return (
            <main className="main--signup">
                <h1>Sign Up</h1>
                <form className="form--signup">
                    <TextField hintText="Enter a username"
                        floatingLabelText="Username"
                        value={this.state.username}
                        id="username"
                        name="username"
                        onChange={(event) => this.handleInput('username', event)} />
                    <TextField hintText="Enter an email"
                        floatingLabelText="Email"
                        value={this.state.email}
                        id="email"
                        name="email"
                        type="email"
                        onChange={(event) => this.handleInput('email', event)} />
                    <TextField hintText="Enter a password"
                        floatingLabelText="Password"
                        value={this.state.password}
                        id="password"
                        name="password"
                        type="password"
                        onChange={(event) => this.handleInput('password', event)} />
                    <TextField hintText="Reenter your password"
                        floatingLabelText="Reenter Password"
                        value={this.state.verify}
                        id="verify"
                        name="verify"
                        type="password"
                        onChange={(event) => this.handleInput('verify', event)} />
                    <RaisedButton label="Sign Up"
                        primary={true}
                        className="form-btn"
                        onClick={
                            () => this.handleSubmit(this.state.username, this.state.email, this.state.password, this.state.verify)
                        }/>
                </form>
                <p className="redirect-link">Already signed up?<Link to="/login">Login</Link></p>
            </main>
        );
    }
};

SignupForm = connect()(SignupForm);

export default SignupForm;