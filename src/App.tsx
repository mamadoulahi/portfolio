import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { useActiveSection } from './hooks/useActiveSection'
import './App.css'

function App() {
  const activeSection = useActiveSection()

  return (
    <div className="app">
      <a href="#main" className="skip-link">
        Aller au contenu
      </a>
      <Header activeSection={activeSection} />
      <main id="main">
        <Hero />
        <Services />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
