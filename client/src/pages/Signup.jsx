import React from 'react';
import Header from '../components/register/Header';
import Signup from '../components/register/Signup';
import Nav from '../components/mainpage/Mainnav'

export default function SignupPage() {
    return (
        <React.Fragment>
            <Nav>
            </Nav>
            <Header
                heading='Signup to create an account'
                paragraph='Already have an account? '
                linkName='Login'
                linkUrl='/login'
            />
            <Signup />
        </React.Fragment>
    )
}