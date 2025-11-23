import { useState, useEffect } from 'react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import CounterArea from './components/CounterArea';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import MyTimeline from './components/MyTimeline';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Scroll to section
  const scrollToSection = (id) => {
    setActiveSection(id);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header 
        isScrolled={isScrolled} 
        scrollToSection={scrollToSection} 
        activeSection={activeSection}
      />
      <Banner />
      <CounterArea />
      <About />
      <Skills />
      <MyTimeline />
      <Education />
      <Projects />
      <Footer 
        isScrolled={isScrolled} 
        scrollToSection={scrollToSection} 
      />
    </>
  )
}

export default App
