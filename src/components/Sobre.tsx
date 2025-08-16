
import React from 'react'
import { motion } from 'framer-motion'
import { Users, Heart, GraduationCap, Target } from 'lucide-react'

const Sobre: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Nossa História
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Conheça o coração por trás de cada bolo no pote
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800">Turma do 9º Ano</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Somos uma turma unida do Colégio Adventista, cheia de sonhos e determinação. 
                Cada um de nós contribui com suas habilidades especiais para este projeto.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-3 rounded-full mr-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800">Feira do Empreendedor</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Este projeto faz parte da nossa participação na Feira do Empreendedor, 
                onde aprendemos sobre negócios, trabalho em equipe e responsabilidade.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-100">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-pink-400 to-red-400 p-3 rounded-full mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800">Nosso Objetivo</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Estamos arrecadando fundos para nossa formatura, mas mais que isso, 
                queremos espalhar alegria e sabor para toda a comunidade escolar.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-yellow-200 via-orange-200 to-pink-200 rounded-3xl p-8 shadow-xl">
              <div className="text-center">
                <div className="bg-white rounded-full p-6 inline-block mb-6 shadow-lg">
                  <Heart className="h-12 w-12 text-pink-500" fill="currentColor" />
                </div>
                
                <h4 className="text-3xl font-bold text-gray-800 mb-4">
                  Feito com Amor
                </h4>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Cada bolo no pote é preparado com muito carinho e atenção aos detalhes. 
                  Usamos apenas ingredientes de qualidade e receitas testadas pela família.
                </p>

                <div className="bg-white rounded-2xl p-4 shadow-inner">
                  <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text">
                    "Transformando sonhos em realidade,
                    <br />
                    um potinho de cada vez"
                  </p>
                  <p className="text-sm text-gray-600 mt-2 font-medium">
                    - Turma 9º Ano Adventista
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Sobre
