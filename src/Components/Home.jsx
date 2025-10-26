import React from 'react'
import Header from './Header/Header';
import Hero from './Hero/Hero';
import "./Home.css"
function Home({ toggleHomeChat }) {
  return (
    <>
      <Header toggleHomeChat={toggleHomeChat} />
      <Hero toggleHomeChat={toggleHomeChat} />
    </>
  );
}

export default Home