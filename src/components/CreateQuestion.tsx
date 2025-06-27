import React, { useState } from 'react'

interface Props{
    isOpen: boolean
    onClose: () => void;
    onSubmit: (question: {title: string; description: string; emoji: string}) => void
}

function CreateQuestion({isOpen, onClose, onSubmit}: Props){
   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')
   const [emoji, setEmoji] = useState('❔')

   if (!isOpen) return null;

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim()){
        alert("Please enter a title.")
        return
    }
    if (!description.trim()){
        alert("Please enter a description")
        return
    }

    onSubmit({
        title:title.trim(),
        description:description.trim(),
        emoji:emoji || '❔'
    })

    // Reset Form
    setTitle('')
    setDescription('')
    setEmoji('❔')
   }

   return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md mx-4 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Create Question</h2>
                <button 
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 text-xl font-bold"
                >
                </button>
            </div>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Input Question
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Would you rather..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Input Description
                    </label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Input Emoji
                    </label>
                    <input
                        type="text"
                        value={emoji}
                        onChange={(e) => setEmoji(e.target.value)}
                        placeholder="❔"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                </div>
                
                <div className="flex gap-3 pt-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    </div>
   );
}

export default CreateQuestion