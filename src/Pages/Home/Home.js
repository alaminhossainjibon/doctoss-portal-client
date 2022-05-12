import React from 'react';
import Appoint from './Appoint';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Dental from './Dental';
import Footer from '../Shared/Footer';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Dental></Dental>
            <Appoint></Appoint>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;