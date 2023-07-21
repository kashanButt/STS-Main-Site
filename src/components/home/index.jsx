import React from 'react'
import SocialsSidebar from '../shared/SocialsSidebar'
import Header from '../shared/Header'
import Banner from './components/Banner'

const Home = () => {
    return (
        <div className='container'>
            <Header />
            <SocialsSidebar />
            <Banner />
        </div>
    )
}

export default Home