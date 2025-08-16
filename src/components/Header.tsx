
import React from 'react'
import { Heart, GraduationCap } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b-2 border-orange-200">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-pink-400 to-orange-400 p-3 rounded-full shadow-lg">
              <Heart className="h-6 w-6 text-white" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                Bolos no Pote
              </h1>
              <p className="text-sm text-gray-600 font-medium">9º Ano Adventista</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full">
            <GraduationCap className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-800">Feira do Empreendedor</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
