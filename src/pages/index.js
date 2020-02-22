import React from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import '../sass/global.scss';
import '../sass/index.scss';

const IndexPage = () => {
  return (
    <div className="container">
      <Navigation />
      <Footer />
    </div>
  );
};

export default IndexPage;
