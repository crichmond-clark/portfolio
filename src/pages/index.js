import React from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import '../sass/global.scss';
import '../sass/index.scss';

const IndexPage = () => {
  return (
    <div className="container">
      <Navigation />
      <main className="main">
        <div>
          <h1 className="heading-primary">Connor Richmond-Clark</h1>
          <h2 className="heading-secondary">. Front-End Developer .</h2>
        </div>

        <a href="/projects">Projects</a>
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
