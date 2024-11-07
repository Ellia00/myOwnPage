import { useEffect, useState } from 'react'
import Header from './components/Header'
import Me from './sections/Me'
import Education from './sections/Education'
import ExProject from './sections/ExProject'
import Contact from './sections/Contact'


function App() {

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options)

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }

  }, []);

  return (
    <>
      <div>
        <Header activeSection={activeSection} />
        <Me />
        <Education />
        <ExProject />
        <Contact />

      </div>
    </>
  )
}

export default App
