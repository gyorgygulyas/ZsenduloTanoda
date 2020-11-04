import React from 'react';
import Header from '../Header/Header';
import Introduction from '../Introduction/Introduction';
import Contact from '../Contact/Contact';
import Accecssibility from '../Accessibility/Accessibility';
import Partners from '../Partners/Partners';
import Palyazatok from '../Palyazatok/Palyazatok';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import ScrollTop from '../ScrollToTheTop/ScrollToTheTop';

import './index.scss';

const Index = () => {
  return (
    <div className="index-wrapper">
      <Header />
      <Introduction />
      <Contact />
      <Accecssibility />
      <AboutUs />
      <Partners />
      <Palyazatok />
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default Index;
