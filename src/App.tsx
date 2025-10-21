import './App.css'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'

function App() {

  return (
    <>
      <section id="hero">
        <HeroSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
    </>
  )
}

export default App
