import Navbar from './Navbar'
import '../index.css'

function About() {
    return (
        <>
            <Navbar activePage="about" />
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                    <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                </div>
                
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">About Us</h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
                            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                We are a passionate team of innovators dedicated to creating engaging digital experiences that bring people together. Founded with the mission to spark meaningful conversations and connections, our platform combines cutting-edge technology with intuitive design to deliver exceptional user experiences.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                With years of expertise in web development and user engagement, we strive to build products that not only meet but exceed our users' expectations. Our commitment to quality, innovation, and community drives everything we do, making us the trusted choice for thousands of users worldwide.
                            </p>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 border-l-4 border-cyan-400">
                                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Innovation</h3>
                                <p className="text-gray-300">Pushing boundaries with cutting-edge technology and creative solutions.</p>
                            </div>
                            
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 border-l-4 border-purple-400">
                                <h3 className="text-xl font-semibold text-purple-400 mb-3">Community</h3>
                                <p className="text-gray-300">Building meaningful connections and fostering engagement among users.</p>
                            </div>
                            
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 border-l-4 border-pink-400">
                                <h3 className="text-xl font-semibold text-pink-400 mb-3">Excellence</h3>
                                <p className="text-gray-300">Delivering exceptional quality in every project we undertake.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;