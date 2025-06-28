// Defining Props for Later
interface NavbarProps {
    activePage?: string;
}

const Navbar = ({ activePage }: NavbarProps) => {
    return (
        <nav className="bg-slate-900/80 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Would you Rather?
                </h1>
                <ul className="flex space-x-6 text-gray-300 font-medium">
                    <li>
                        <a 
                            href="/" 
                            className={`hover:text-cyan-400 transition-colors duration-300 ${
                                activePage === 'home' ? 'text-cyan-400 font-semibold' : ''
                            }`}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/about" 
                            className={`hover:text-cyan-400 transition-colors duration-300 ${
                                activePage === 'about' ? 'text-cyan-400 font-semibold' : ''
                            }`}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/contact" 
                            className={`hover:text-cyan-400 transition-colors duration-300 ${
                                activePage === 'contact' ? 'text-cyan-400 font-semibold' : ''
                            }`}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;