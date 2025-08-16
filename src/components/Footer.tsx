
import React from 'react'
import { Heart, GraduationCap, Users } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="bg-gradient-to-r from-pink-400 to-orange-400 p-2 rounded-full">
                <Heart className="h-5 w-5 text-white" fill="currentColor" />
              </div>
              <h4 className="text-xl font-bold">Bolos no Pote</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Feitos com carinho pela turma do 9º ano do Colégio Adventista para nossa formatura especial.
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-2 rounded-full">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-xl font-bold">Feira do Empreendedor</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Projeto educativo que nos ensina sobre empreendedorismo, trabalho em equipe e responsabilidade.
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="bg-gradient-to-r from-green-400 to-emerald-400 p-2 rounded-full">
                <Users className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-xl font-bold">Nossa Turma</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Unidos pelo mesmo objetivo: criar memórias inesquecíveis e conquistar nossos sonhos juntos.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-5 w-5 text-pink-400" fill="currentColor" />
            <span className="text-lg font-semibold">Obrigado por nos apoiar!</span>
            <Heart className="h-5 w-5 text-pink-400" fill="currentColor" />
          </div>
          
          <p className="text-gray-400">
            © 2025 Turma 9º Ano - Colégio Adventista | Feira do Empreendedor
          </p>
          
          <p className="text-sm text-gray-500 mt-2">
            Cada compra nos aproxima mais da nossa formatura dos sonhos ✨
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
