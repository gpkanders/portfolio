import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'  
import Music from './components/Music'  
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import MusicPage from './pages/MusicPage'




function App() {
  return(
      <div className="min-h-screen bg-slate-950 text-slate overflow-hidden">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/projects" element={<ProjectsPage/>}/>
            <Route path="/music" element={<MusicPage/>}/>
          </Routes>
        </Router>
      </div>
  )
}

export default App
