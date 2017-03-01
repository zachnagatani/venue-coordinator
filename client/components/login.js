import React from 'react';
import LoginForm from './loginForm';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container container--login">
                <LoginForm />
            </div>
        );
    }
};

export default Login;