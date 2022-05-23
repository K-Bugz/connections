import React from 'react';
import Header from '../components/register/Header'
import Login from '../components/register/Login'

export default function LoginPage() {
    return (
        <React.Fragment>
            <Header
                heading='Login to your account'
                paragraph="Don't have an account yet?"
                linkName='Signup'
                linkUrl='/signup'
            />
            <Login />
        </React.Fragment>
    )
}