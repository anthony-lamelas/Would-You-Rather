import { useState } from 'react'

interface QuestionCardProps {
    emoji: string
    title: string
    description: string
    iconBgColor: string

}

// Function
function QuestionCard({emoji, title, description, iconBgColor}: QuestionCardProps){
    const [colorState, setColorState] = useState(0)

    const handleClick = () => {
        setColorState((prev) => (prev + 1) % 3)
    }

    const getBackgroundColor = () => {
        switch(colorState){
            case 1: return 'bg-green-800'
            case 2: return 'bg-red-800'
            default: return 'bg-white dark:bg-gray-800'
        }
    }
    return (
        <div 
            className={`group cursor-pointer transform hover:scale-105 transition-all duration-300 ${getBackgroundColor()}`}
            onClick={handleClick}
        >
            <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700">
                <div className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <span className="text-2xl">{emoji}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{description}</p>
            </div>
        </div>
    )
}

export default QuestionCard




