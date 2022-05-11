import React from 'react';
import Appoint from './Appoint';
import Banner from './Banner';
import Dental from './Dental';
import Info from './Info';
import Services from './Services';
const Home = () => {
    return (
        <div className=' px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Dental></Dental>
            <Appoint></Appoint>
        </div>
    );
};

export default Home;