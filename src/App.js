import React, { useEffect } from 'react';
import NavBar from './NavBar';
import HomeLand from './HomeLand';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';

const App = ()=> {
  useEffect(() => {
    const handleDarkMode = () => {
      document.body.classList.toggle('dark');
      // Assuming daroh2 is a valid element ID
      const daroh2 = document.getElementById('daroh2');
      if (daroh2) {
        daroh2.classList.toggle('dark');
      }
    };

    const dark = document.getElementById('dark');
    dark.addEventListener('click', handleDarkMode);

    return () => {
      dark.removeEventListener('click', handleDarkMode);
    };
  }, []);

  return (
    <div className="App">
      <NavBar />
      <HomeLand />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
