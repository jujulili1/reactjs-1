import React, { Component } from 'react'
import Header from '../items/Header'

// import '../styles/LandingPages.css'
import Section1 from '../items/Section-1'
import Section2 from '../items/Section-2'
import Footer from '../items/Footer'


//class component
class LandingPages extends Component {
    render() {
        return (
            <div>
                <Header />
                <Section1 />
                <Section2 />
                <Footer />
            </div>
        )
    }
}

export default LandingPages;