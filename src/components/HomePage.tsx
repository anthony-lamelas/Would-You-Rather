
import '../index.css'
import Navbar from './Navbar'
import QuestionCard from './QuestionCard';

function HomePage() {
  const questions = [
    {
      id: 1,
      emoji: "🥤",
      title: "Never Drink Soda Again or Never Drink Milk Again?",
      description: "A classic dilemma of beverages. What's your choice?",
      iconBgColor: "bg-indigo-100 dark:bg-indigo-900"
    },
    {
      id: 2,
      emoji: "🏖️",
      title: "Beach Vacation or Mountain Adventure?",
      description: "Sun and sand or peaks and trails? Choose your escape.",
      iconBgColor: "bg-purple-100 dark:bg-purple-900"
    },
    {
      id: 3,
      emoji: "🦸",
      title: "Have the Ability to Fly or Be Invisible?",
      description: "Ultimate superpowers await. What's your pick?",
      iconBgColor: "bg-green-100 dark:bg-green-900"
    },
    {
      id: 4,
      emoji: "🍕",
      title: "Pizza Every Day or Never Eat Pizza Again?",
      description: "The ultimate food dilemma for pizza lovers everywhere.",
      iconBgColor: "bg-yellow-100 dark:bg-yellow-900"
    },
    {
      id: 5,
      emoji: "💰",
      title: "Be Rich but Alone or Poor with Great Friends?",
      description: "Money vs. relationships - what matters more to you?",
      iconBgColor: "bg-red-100 dark:bg-red-900"
    },
    {
      id: 6,
      emoji: "🎵",
      title: "Only Listen to One Song Forever or Never Hear Music Again?",
      description: "A musical nightmare scenario. What's your choice?",
      iconBgColor: "bg-blue-100 dark:bg-blue-900"
    }
  ];

  return (
    <>
      <Navbar activePage="home" />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900 py-16 px-4">
        <div className="w-full">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Would you Rather?
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Create Your Own Question
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage;
