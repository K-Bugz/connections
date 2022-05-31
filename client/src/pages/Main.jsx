import React from 'react';
import Login from '../components/mainpage/Main'
import Header from '../components/mainpage/Mainnav'
import Footer from '../components/footer/Footer'

export default function LoginPage() {
    return (
        <React.Fragment>
            <Header />
            <Login />
            <Footer />
        </React.Fragment>
    )
}