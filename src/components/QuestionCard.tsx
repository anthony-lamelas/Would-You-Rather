import { useState } from 'react'

interface QuestionCardProps {
    emoji: string
    title: string
    description: string
    iconBgColor: string

}

function QuestionCard({emoji, title, description, iconBgColor}: QuestionCardProps){
    const [colorState, setColorState] = useState(0)

    const handleClick = () => {
        setColorState((prev) => (prev + 1) % 3)
    }

    const getBackgroundColor = () => {
        switch(colorState){
            case 1: return 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-emerald-400/30'
            case 2: return 'bg-gradient-to-br from-red-500/20 to-pink-500/20 border-red-400/30'
            default: return 'bg-white/10 border-white/20'
        }
    }

    const getTextColor = () => {
        switch(colorState){
            case 1: return 'text-emerald-100'
            case 2: return 'text-red-100'
            default: return 'text-white'
        }
    }

    const getDescriptionColor = () => {
        switch(colorState){
            case 1: return 'text-emerald-200'
            case 2: return 'text-red-200'
            default: return 'text-gray-300'
        }
    }

    return (
        <div 
            className={`group cursor-pointer transform hover:scale-105 transition-all duration-300 p-6 rounded-2xl shadow-xl hover:shadow-2xl backdrop-blur-lg border ${getBackgroundColor()} hover:bg-white/20`}
            onClick={handleClick}
        >
            <div className={`w-14 h-14 ${iconBgColor} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                <span className="text-2xl">{emoji}</span>
            </div>
            <h3 className={`text-xl font-bold mb-3 ${getTextColor()}`}>
                {title}
            </h3>
            <p className={`${getDescriptionColor()} leading-relaxed`}>{description}</p>
        </div>
    )
}

export default QuestionCard




