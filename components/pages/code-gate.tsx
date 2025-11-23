"use client"

import type React from "react"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import FloatingHearts from "@/components/floating-hearts"

const SECRET_CODE = "iloveyou"

export default function CodeGate() {
  const [code, setCode] = useState("")
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (code.toLowerCase() === SECRET_CODE) {
      navigate("/game")
    } else {
      setError(true)
      setCode("")
      setTimeout(() => setError(false), 500)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit()
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 flex items-center justify-center relative overflow-hidden p-4">
      <FloatingHearts count={12} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 w-full max-w-md"
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          className="text-center mb-8"
        >
          <div className="text-5xl">❤️</div>
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-2">Enter the Secret Code</h1>
        <p className="text-center text-purple-600 mb-8">I always tell you... ❤️</p>

        <motion.div
          animate={error ? { x: [-10, 10, -10, 0] } : { x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter the code..."
            className="w-full px-6 py-4 rounded-2xl bg-white/80 backdrop-blur border-2 border-purple-200 text-center text-lg focus:outline-none focus:border-purple-500 transition-colors"
          />
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center mb-4 text-purple-600"
          >
            🥺 wrong code
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          className="w-full px-6 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          Unlock 💫
        </motion.button>
      </motion.div>
    </div>
  )
}
