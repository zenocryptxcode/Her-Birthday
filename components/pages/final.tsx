"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import FloatingHearts from "@/components/floating-hearts"

const BIRTHDAY_MESSAGE = `Purnima, every moment with you means the world to me. Even though we're far apart, you're always in my heart. Today is your day, and I want you to feel as special as you are to me. Thank you for being the most wonderful person in my life. Happy Birthday to my love! 💕`

export default function Final() {
  const navigate = useNavigate()
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < BIRTHDAY_MESSAGE.length) {
        setDisplayedText(BIRTHDAY_MESSAGE.substring(0, index + 1))
        index++
      } else {
        setIsComplete(true)
        clearInterval(interval)
      }
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex flex-col items-center justify-center relative overflow-hidden p-4">
      <FloatingHearts count={20} />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-2xl text-center"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="text-7xl mb-6"
        >
          🎂
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-2">
          Happy Birthday, Purnima ❤️
        </h1>
        <p className="text-2xl text-purple-700 mb-8">13th December — Your Special Day</p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/60 backdrop-blur rounded-3xl p-8 mb-8 border-2 border-purple-200 shadow-lg"
        >
          <p className="text-lg text-purple-800 leading-relaxed text-pretty">
            {displayedText}
            {!isComplete && <span className="animate-pulse">|</span>}
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={isComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/surprise")}
          className="px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow pulse-glow"
        >
          Open Your Surprise 🎁
        </motion.button>
      </motion.div>
    </div>
  )
}
