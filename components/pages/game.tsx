"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import FloatingHearts from "@/components/floating-hearts"
import HeartPopper from "@/components/heart-popper"

export default function Game() {
  const navigate = useNavigate()
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [popped, setPopped] = useState(0)
  const totalHearts = 10

  useEffect(() => {
    const newHearts = Array.from({ length: totalHearts }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 60 + 20,
    }))
    setHearts(newHearts)
  }, [])

  const handleHeartPop = (id: number) => {
    setHearts(hearts.filter((h) => h.id !== id))
    setPopped(popped + 1)
  }

  useEffect(() => {
    if (popped === totalHearts && hearts.length === 0) {
      setTimeout(() => navigate("/final"), 1000)
    }
  }, [popped, hearts.length, navigate])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-blue-50 to-purple-100 flex flex-col items-center justify-center relative overflow-hidden p-4">
      <FloatingHearts count={8} />

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 mb-8 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-2">
          Pop these hearts for me, Purnima 💘
        </h1>
        <p className="text-purple-600 text-lg">
          {popped} / {totalHearts} hearts popped
        </p>
      </motion.div>

      <div className="relative w-full h-96 md:h-[500px] flex-1 flex items-center justify-center">
        {hearts.map((heart) => (
          <HeartPopper key={heart.id} id={heart.id} x={heart.x} y={heart.y} onPop={handleHeartPop} />
        ))}
      </div>
    </div>
  )
}
