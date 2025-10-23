import './App.css'
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
    </div>
  )
}

export default App
