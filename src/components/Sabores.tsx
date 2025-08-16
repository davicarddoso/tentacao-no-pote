
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Heart } from 'lucide-react'
import { lumi } from '../lib/lumi'

interface Bolo {
  _id: string
  nome: string
  descricao: string
  ingredientes: string[]
  preco: number
  imagem: string
  categoria: string
}

const Sabores: React.FC = () => {
  const [bolos, setBolos] = useState<Bolo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBolos = async () => {
      try {
        const { list } = await lumi.entities.bolos.list()
        setBolos(list || [])
      } catch (error) {
        console.error('Erro ao carregar bolos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBolos()
  }, [])

  const getCategoryColor = (categoria: string) => {
    switch (categoria) {
      case 'morango': return 'from-pink-400 to-red-400'
      case 'chocolate': return 'from-amber-600 to-orange-600'
      case 'especial': return 'from-purple-400 to-pink-400'
      default: return 'from-gray-400 to-gray-500'
    }
  }

  if (loading) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-12"></div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-gray-200 rounded-2xl h-96"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
            Nossos Sabores Especiais
          </h3>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Três delícias irresistíveis preparadas com ingredientes selecionados e muito carinho
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {bolos.map((bolo, index) => (
            <motion.div
              key={bolo._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-orange-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={bolo.imagem} 
                  alt={bolo.nome}
                  className="w-full h-64 object-cover"
                />
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${getCategoryColor(bolo.categoria)} text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg`}>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4" fill="currentColor" />
                    <span>Especial</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                  {bolo.nome}
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-center">
                  {bolo.descricao}
                </p>

                <div className="mb-4">
                  <h5 className="font-semibold text-gray-700 mb-2 flex items-center">
                    <Heart className="h-4 w-4 text-pink-500 mr-2" />
                    Ingredientes Especiais:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {bolo.ingredientes.map((ingrediente, i) => (
                      <span 
                        key={i}
                        className="bg-gradient-to-r from-pink-100 to-orange-100 text-pink-800 px-3 py-1 rounded-full text-sm border border-pink-200"
                      >
                        {ingrediente}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-4 border-2 border-green-200">
                    <p className="text-3xl font-bold text-green-700">
                      R$ {bolo.preco.toFixed(2).replace('.', ',')}
                    </p>
                    <p className="text-sm text-green-600 font-medium">por potinho</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sabores
