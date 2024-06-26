import React from 'react';
import './App.css';
import Header from './componenets/header/Header';
import Home from './componenets/home/Home';
import About from './componenets/about/About';
import Skills from './componenets/skills/Skills';
import Projects from './componenets/projects/Projects';
import Contact from './componenets/contact/Contact';
import Footer from './componenets/footer/Footer';
import Scrollup from './componenets/scrollup/Scrollup';


function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />

      </main>
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
