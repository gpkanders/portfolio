import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
            {/*Nav Links*/}
                <div className="flex items-center space-x-6 lg:space-x-8">
                <Link to="/" className="text-gray-300 hover:text-white text-sm lg:text-base">
                    Home
                    </Link>
                    <Link to="/projects" className="text-gray-300 hover:text-white text-sm lg:text-base">
                    Projects
                    </Link>
                    <Link to="/music" className="text-gray-300 hover:text-white text-sm lg:text-base">
                    Music
                    </Link>
                    <Link to="/about" className="text-gray-300 hover:text-white text-sm lg:text-base">
                    About
                    </Link>
                    <Link to="/resume" className="text-gray-300 hover:text-white text-sm lg:text-base">
                    Resumé
                    </Link>
                    <Link to="/gallery" className="text-gray-300 hover:text-white text-sm lg:text-base">
                    Gallery
                    </Link>
                </div>
            </div>
        </div>
    </nav>
    )
}