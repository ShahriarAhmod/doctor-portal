import React from 'react';
import About from './About/About';
import Appointment from './Appointment/Appointment';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import InfoCard from './InfoCard/InfoCard';
import Navigation from './Navigation/Navigation';
import OurDoctors from './OurDoctors/OurDoctors';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <InfoCard />
            <Services />
            <Appointment />
            <About />
            <Blogs />
            <OurDoctors />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;