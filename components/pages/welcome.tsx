"use client"

import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import FloatingHearts from "@/components/floating-hearts"

export default function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex items-center justify-center relative overflow-hidden">
      <FloatingHearts count={15} />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center px-6"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="mb-6"
        >
          <div className="text-6xl">💕</div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-4"
        >
          Hi Purnima 💕
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl md:text-3xl text-purple-700 mb-8"
        >
          It's me, Arun… I made something special for you.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/code")}
          className="mt-8 px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 pulse-glow"
        >
          Tap to begin ✨
        </motion.button>
      </motion.div>
    </div>
  )
}
