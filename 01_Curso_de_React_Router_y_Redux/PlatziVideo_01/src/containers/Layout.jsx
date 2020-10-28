import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Layout = ({ children }) => (
    <div className="App">
        {children}
        <Footer />
    </div>
)

export default Layout
