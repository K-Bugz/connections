import React from 'react';
import Header from '../components/register/Header';
import Signup from '../components/register/Signup';

export default function SignupPage() {
    return (
        <React.Fragment>
            <Header
                heading='Signup to create an account'
                paragraph='Already have an account? '
                linkName='Login'
                linkUrl='/'
            />
            <Signup />
        </React.Fragment>
    )
}