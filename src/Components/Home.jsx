import React from 'react'
import Header from './Header/Header';
import Hero from './Hero/Hero';
function Home({ toggleHomeChat }) {
  return (
    <>
      <Header toggleHomeChat={toggleHomeChat} />
      <Hero toggleHomeChat={toggleHomeChat} />
    </>
  );
}

export default Home