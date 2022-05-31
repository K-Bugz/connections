import React from 'react';
import Header from '../components/register/Header'
import Login from '../components/register/Login'
import Nav from '../components/mainpage/Mainnav'
import Footer from '../components/footer/Footer'

export default function LoginPage() {
    return (
        <React.Fragment>
           <Nav>
            </Nav>
            <Header
                heading='Login to your account'
                paragraph="Don't have an account yet?"
                linkName='Signup'
                linkUrl='/signup'
            />
            <Login />
            <Footer />
        </React.Fragment>
    )
}