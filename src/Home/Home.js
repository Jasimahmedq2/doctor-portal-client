import React from 'react';
import Appoinment from '../Banner/Appoinment';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner/Banner2';
import Footer from '../Footer/Footer';
import Info from '../Info/Info';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Form from './Form';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Banner2></Banner2>
      <Appoinment></Appoinment>
      <Review></Review>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
};

export default Home;