
import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Heart } from 'lucide-react'

const WhatsAppButton: React.FC = () => {
  const whatsappNumber = "5538991192038" // Substitua pelo número real
  const message = encodeURIComponent(
    "Olá! 😊 Vi os bolos no pote da turma do 9º ano no site e gostaria de fazer um pedido! 🍰✨"
  )
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-full shadow-xl animate-pulse">
              <MessageCircle className="h-10 w-10 text-white" />
            </div>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Faça Seu Pedido!
          </h3>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Pronto para experimentar nossos deliciosos bolos no pote? 
            <br />
            Entre em contato conosco pelo WhatsApp e garante já o seu!
          </p>

          <div className="flex items-center justify-center space-x-2 mb-8 text-lg text-pink-700">
            <Heart className="h-5 w-5 text-pink-500" fill="currentColor" />
            <span className="font-medium">Cada pedido nos ajuda a realizar nosso sonho de formatura</span>
            <Heart className="h-5 w-5 text-pink-500" fill="currentColor" />
          </div>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <MessageCircle className="h-6 w-6 group-hover:animate-bounce" />
            <span>Chamar no WhatsApp</span>
            <span className="text-2xl">🍰</span>
          </motion.a>

          <p className="text-sm text-gray-600 mt-4">
            Resposta rápida garantida! Estamos ansiosos para atender você 😊
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatsAppButton
