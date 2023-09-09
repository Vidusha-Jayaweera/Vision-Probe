import React from 'react'
import Router from '../../router/Routes'
import Header from '../header/Header'
import Footer from '../Footer/Footer'


const Layout = () => {
    return (
        <>
            <Header />
            <Router />
            <Footer /> 
        </>
    )
}

export default Layout;