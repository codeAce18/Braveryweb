import React from 'react';

// import { Navbar, Header, Clients, AboutUs, Services, Solutions, CTA, Pricing, Statistics, Testimonials, Footer } from './components';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Clients from './components/Clients';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Solutions from './components/Solutions';
import Statistics from './components/Statistics';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

import './App.css';
import './index.css';


const App = () => {

    return(
        <div>
            <Navbar />
            <Header />
            <Clients />
            <Services />
            <AboutUs />
            <Solutions />
            <Statistics />
            <Pricing />
            <Blog />
            <Testimonials />
            <CTA />
            <Footer />
        </div>
    )
   
};
  
  export default App;