// Defining Props for Later
interface NavbarProps {
    activePage?: string;
}

const Navbar = ({ activePage }: NavbarProps) => {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                <h1 className="text-xl font-bold text-indigo-600">Would you Rather?</h1>
                <ul className="flex space-x-6 text-gray-600 font-medium">
                    <li>
                        <a 
                            href="/" 
                            className={`hover:text-indigo-600 transition-colors ${
                                activePage === 'home' ? 'text-indigo-600 font-semibold' : ''
                            }`}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/about" 
                            className={`hover:text-indigo-600 transition-colors ${
                                activePage === 'about' ? 'text-indigo-600 font-semibold' : ''
                            }`}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/contact" 
                            className={`hover:text-indigo-600 transition-colors ${
                                activePage === 'contact' ? 'text-indigo-600 font-semibold' : ''
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