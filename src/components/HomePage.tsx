import '../index.css'
import Navbar from './Navbar'
import QuestionCard from './QuestionCard';
import {useState} from 'react'
import CreateQuestion from './CreateQuestion'

function HomePage() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  
  const [questions, setQuestions] = useState([
    {
      id: 1,
      emoji: "🥤",
      title: "Never Drink Soda Again or Never Drink Milk Again?",
      description: "A classic dilemma of beverages. What's your choice?",
      iconBgColor: "bg-gradient-to-br from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      emoji: "🏖️",
      title: "Beach Vacation or Mountain Adventure?",
      description: "Sun and sand or peaks and trails? Choose your escape.",
      iconBgColor: "bg-gradient-to-br from-pink-500 to-rose-400"
    },
    {
      id: 3,
      emoji: "🦸",
      title: "Have the Ability to Fly or Be Invisible?",
      description: "Ultimate superpowers await. What's your pick?",
      iconBgColor: "bg-gradient-to-br from-emerald-500 to-teal-400"
    },
    {
      id: 4,
      emoji: "🍕",
      title: "Pizza Every Day or Never Eat Pizza Again?",
      description: "The ultimate food dilemma for pizza lovers everywhere.",
      iconBgColor: "bg-gradient-to-br from-orange-500 to-amber-400"
    },
    {
      id: 5,
      emoji: "💰",
      title: "Be Rich but Alone or Poor with Great Friends?",
      description: "Money vs. relationships - what matters more to you?",
      iconBgColor: "bg-gradient-to-br from-red-500 to-pink-400"
    },
    {
      id: 6,
      emoji: "🎵",
      title: "Only Listen to One Song Forever or Never Hear Music Again?",
      description: "A musical nightmare scenario. What's your choice?",
      iconBgColor: "bg-gradient-to-br from-violet-500 to-purple-400"
    }
  ])

  const addQuestion = (newQuestion: {title: string; description: string; emoji: string;}) => {
    const question = {
      id: Date.now(),
      title: newQuestion.title,
      description: newQuestion.description,
      emoji: newQuestion.emoji,
      iconBgColor: "bg-gradient-to-br from-indigo-500 to-blue-400"
    }
    setQuestions(prev => [...prev, question])
    closeModal()
  }

  return (
    <>
      <Navbar activePage="home" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        </div>
        
        <div className="w-full relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Would you Rather?
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Make tough choices and discover what matters most to you. Choose your adventure below!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {questions.map((question) => (
              <QuestionCard 
                key={question.id}
                emoji={question.emoji}
                title={question.title}
                description={question.description}
                iconBgColor={question.iconBgColor}
              />
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 border border-cyan-500/20"
            onClick={openModal}>
              Create Your Own Question
            </button>
          </div>
        </div>
      </div>
      <CreateQuestion 
      isOpen={isModalOpen} 
      onClose={closeModal}
      onSubmit={addQuestion} />

    </>
  )
}

export default HomePage;
