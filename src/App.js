import React, { useState } from 'react';

//components
import Banner from './components/Banner';
import Header from './components/Header';
import NavMobile from './components/NavMobile';
import Experience from './components/Experience';
import Works from './components/Works';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
//import aos
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const App = () => {
  const [navMobile, setNavMobile] = useState(false);

  //aos initialization
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <div className="relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:flex">
      <Header setNavMobile={setNavMobile} />
      <Banner />
      <div
        className={`${
          navMobile ? 'right-0' : '-right-full'
        } fixed top-0 bottom-0 w-48 transition-all`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Experience />
      <Works />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
