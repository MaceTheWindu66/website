import './App.css'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'

function App() {

  return (
    <div className="flex flex-col items-center">
    
      <section id="hero">
        <HeroSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id='about'>
        <AboutSection />
      </section>
      <section id='contact'>
        <ContactSection />
      </section>
    </div>
  )
}

export default App
