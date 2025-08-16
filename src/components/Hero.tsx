
import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Heart } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-orange-100 to-yellow-100 opacity-60"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-4 rounded-full shadow-xl">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
            Sabores que Aquecem
            <br />
            <span className="text-4xl md:text-5xl">o Coração</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Feitos com muito carinho pela turma do <strong>9º ano</strong> do Colégio Adventista.
            <br />
            Cada pote é uma pequena felicidade preparada especialmente para você! 
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-lg text-pink-700">
            <Heart className="h-5 w-5 text-pink-500" fill="currentColor" />
            <span className="font-medium">Ajudando nossa formatura com muito amor</span>
            <Heart className="h-5 w-5 text-pink-500" fill="currentColor" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
