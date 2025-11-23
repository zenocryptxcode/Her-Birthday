"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Confetti from "@/components/confetti"
import FloatingHearts from "@/components/floating-hearts"

export default function Surprise() {
  const [showConfetti, setShowConfetti] = useState(true)
  const [musicPlaying, setMusicPlaying] = useState(false)

  useEffect(() => {
    setShowConfetti(true)
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex flex-col items-center justify-center relative overflow-hidden p-4">
      {showConfetti && <Confetti />}
      <FloatingHearts count={25} />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="z-10 max-w-2xl w-full"
      >
        <div className="text-center mb-12">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="text-6xl mb-6 inline-block"
          >
            🎁
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-4">
            Your Surprise! 💫
          </h1>
        </div>

        {/* Photo Frame Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/80 backdrop-blur rounded-2xl p-1 mb-8 shadow-xl border-2 border-purple-200"
        >
          <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl aspect-square flex items-center justify-center relative overflow-hidden">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="text-center"
            >
              <div className="text-8xl mb-4">📸</div>
              <p className="text-purple-600 font-semibold">Your photo goes here</p>
              <p className="text-sm text-purple-500">(Add your favorite memory of us)</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Love Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 mb-8 border-2 border-pink-200 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-purple-700 mb-4">💌 A Love Note</h2>
          <p className="text-purple-800 leading-relaxed text-lg mb-4">Dear Purnima,</p>
          <p className="text-purple-700 leading-relaxed mb-4">
            You are the most incredible person I know. Your smile brightens my darkest days, and your love keeps me
            going even when we're miles apart. Every moment with you is a treasure, and I'm grateful for every day we
            get to spend together.
          </p>
          <p className="text-purple-700 leading-relaxed mb-4">
            On your special day, I want you to know how much you mean to me. You're not just my girlfriend—you're my
            best friend, my inspiration, and my everything. I love you more than words can express.
          </p>
          <p className="text-purple-700 leading-relaxed">
            Here's to making more beautiful memories together. Happy Birthday, my love! 🎂💕
          </p>
        </motion.div>

        {/* Music Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <button
            onClick={() => setMusicPlaying(!musicPlaying)}
            className="px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            {musicPlaying ? "🎵 Music On" : "🔇 Music Off"}
          </button>
          <p className="text-purple-600 text-sm mt-4">(Play your favorite song in the background) 🎶</p>
        </motion.div>

        {/* Sparkles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex justify-center gap-4 text-3xl flex-wrap"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            >
              ✨
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
