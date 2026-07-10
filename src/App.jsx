import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'  
import Music from './components/Music'  
import Resume from './components/Resume'
import Gallery from './components/Gallery'    
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import MusicPage from './pages/MusicPage'
import ResumePage from './pages/ResumePage'
import GalleryPage from './pages/GalleryPage'






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
            <Route path="/resume" element={<ResumePage/>}/>
            <Route path="/gallery" element={<GalleryPage/>}/>
          </Routes>
        </Router>
      </div>
  )
}

export default App
