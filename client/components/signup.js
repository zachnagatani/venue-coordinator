import React from 'react';
import SignupForm from './signupForm';

class Signup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container container--signup">
                <SignupForm />
            </div>
        );
    }
};

export default Signup;