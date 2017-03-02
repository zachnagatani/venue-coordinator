import React from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import auth from '../services/auth';
import {LOGIN, login} from './state/actions';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
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
            case 'password':
                this.setState({
                    password: event.target.value
                });
                break;
            default:
                return this.state;
        }
    }

    handleSubmit(username, password) {
        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
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
            <main className="main--login">
                <h1>Login</h1>
                <form method="POST" action="" className="form--login" onSubmit={(event) => {event.preventDefault(); this.handleSubmit(this.state.username, this.state.password)}}>
                    <TextField hintText="Enter a username"
                        floatingLabelText="Username"
                        id="username"
                        name="username"
                        value={this.state.username}
                        onChange={(event) => this.handleInput('username', event)} />
                    <TextField hintText="Enter a password"
                        floatingLabelText="Password"
                        id="password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={(event) => this.handleInput('password', event)} />
                    <RaisedButton primary={true} label="Login" onClick={() => this.handleSubmit(this.state.username, this.state.password)} />
                </form>
            </main>
        );
    }
};

LoginForm = connect()(LoginForm);

export default LoginForm;