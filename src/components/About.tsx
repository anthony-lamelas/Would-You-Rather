import Navbar from './Navbar'
import '../index.css'

function About() {
    return (
        <>
            <Navbar activePage="about" />
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900 py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">About Us</h1>
                        <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                We are a passionate team of innovators dedicated to creating engaging digital experiences that bring people together. Founded with the mission to spark meaningful conversations and connections, our platform combines cutting-edge technology with intuitive design to deliver exceptional user experiences.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                With years of expertise in web development and user engagement, we strive to build products that not only meet but exceed our users' expectations. Our commitment to quality, innovation, and community drives everything we do, making us the trusted choice for thousands of users worldwide.
                            </p>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
                                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">Innovation</h3>
                                <p className="text-gray-600 dark:text-gray-300">Pushing boundaries with cutting-edge technology and creative solutions.</p>
                            </div>
                            
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                                <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-3">Community</h3>
                                <p className="text-gray-600 dark:text-gray-300">Building meaningful connections and fostering engagement among users.</p>
                            </div>
                            
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Excellence</h3>
                                <p className="text-gray-600 dark:text-gray-300">Delivering exceptional quality in every project we undertake.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;