
import React from 'react'
import { Toaster } from 'react-hot-toast'
import Header from './components/Header'
import Hero from './components/Hero'
import Sabores from './components/Sabores'
import Sobre from './components/Sobre'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: { 
            background: '#8B4513', 
            color: '#fff',
            borderRadius: '12px',
            fontSize: '14px'
          }
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50">
        <Header />
        <Hero />
        <Sabores />
        <Sobre />
        <WhatsAppButton />
        <Footer />
      </div>
    </>
  )
}

export default App
